<template>
  <b-jumbotron header="Upload a picure" lead>
    <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
    <b-progress :value="counter" :max="max" show-progress animated></b-progress>
    <div class="mt-3">Selected file: {{file && file.name}}</div>
    <b-button variant="primary" @click="uploadFile">Upload it!</b-button>

    <b-input-group size class="mb-3" prepend="Titulo">
      <b-form-input placeholder="Image title" v-model="caption"/>
    </b-input-group>
    <b-input-group size="sm" class="mb-3" prepend="Texto">
      <b-form-input placeholder="Sub text" v-model="text"/>
    </b-input-group>
    <b-input-group size="sm" class="mb-3" prepend="Path">
      <b-form-input placeholder="Path to collection" value="static_images-" v-model="path"/>
    </b-input-group>
  </b-jumbotron>
</template>

<script>
import { db, st } from "../firebase";
import firebase from "firebase/app";
import "firebase/storage";

export default {
  name: "ImgUploader",
  data() {
    return {
      file: null,
      caption: null,
      text: null,
      path: null,
      counter: 0,
      max: 100
    };
  },
  methods: {
    uploadFile() {
      var file = this.file;
      var fileSize = (file.size / 1024 / 1024).toFixed(4);

      if (fileSize > 4) {
        alert("Image must be <4MB in size.");
        return false;
      }

      if (file.type != "image/jpeg") {
        alert("Image must be .jpeg.");
        return false;
      }

      var metadata = {
        contentType: "image/jpeg"
      };
      var uploadTask = st.ref(this.$data.path + file.name).put(file, metadata);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.counter = progress;
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING:
              console.log("Upload is running");
              break;
          }
        },
        error => {
          console.log("An error occurred:" + error.code);
          alert("An error occurred:" + error.code);
          switch (error.code) {
            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          //success
          this.counter = 0;
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            db.collection(this.path).add({
              name: this.file.name,
              caption: this.caption,
              text: this.text,
              timestamp: new Date(),
              url: downloadURL
            });
          });
        }
      );
      return true;
    }
  }
};
</script>

