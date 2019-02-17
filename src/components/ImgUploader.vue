<template>
  <v-layout justify-center v-bind="binding" fill-height>
    <v-flex lg12>
      <v-card dark style="width:80%;margin:auto; margin-bottom:10px">
        <v-card-title>
          <h1>Carregue uma foto</h1>
        </v-card-title>
        <v-form style="width:80%;margin:auto">
          <v-container light>
            <b-form-file v-model="file" accept="image/*" :state="Boolean(file)"></b-form-file>
            <v-progress-linear v-model="fileProgress"></v-progress-linear>
            <v-btn color="success" style="height:40px" @click="uploadFile(file)">Upload it!</v-btn>
            <v-text-field v-model="caption" label="Image title" required></v-text-field>
            <v-text-field v-model="text" label="Sub text" required></v-text-field>
            <v-select :items="options" v-model="filePath" label="Collection" solo></v-select>
            <v-text-field v-model="filePath" label="Path to collection" required readonly></v-text-field>
          </v-container>
        </v-form>
      </v-card>
    </v-flex>
    <v-flex lg12>
      <v-card dark style="width:80%;margin:auto">
        <v-card-title>
          <h1>Carregue várias fotos WIP</h1>
        </v-card-title>
        <v-form style="width:80%;margin:auto">
          <v-container light>
            <b-form-file v-model="fileGroup" accept="image/*" :state="Boolean(fileGroup)" multiple></b-form-file>

            <v-progress-linear style="height:12px" v-model="fileGroupProgress"></v-progress-linear>

            <v-btn
              color="success"
              style="height:40px"
              @click="uploadFileGroup(fileGroup)"
            >Upload it!</v-btn>
            <v-select :items="options" v-model="fileGroupPath" label="Collection" solo></v-select>
            <v-text-field v-model="fileGroupPath" label="Path to collection" required readonly></v-text-field>
          </v-container>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { Datab, St } from "../firebase";
import firebase from "firebase/app";

export default {
  name: "ImgUploader",

  data() {
    return {
      file: null,
      caption: null,
      text: null,
      filePath: null,
      fileProgress: 0,
      fileGroup: null,
      fileGroupPath: null,
      fileGroupProgress: 0,
      max: 100,
      options: [
        { value: null, text: "Please select an option" },
        { value: "static_images-home", text: "home collection" },
        { value: "static_images-Fotos-Clube", text: "Fotos Clube collection" },
        {
          value: "static_images-Fotos-Esporte",
          text: "Fotos Esporte collection"
        },
        {
          value: "static_images-Fotos-Eventos",
          text: "Fotos Eventos colleciton"
        }
      ]
    };
  },
  methods: {
    uploadFile(file) {
      var fileSize = (file.size / 1024 / 1024).toFixed(4);

      if (fileSize > 4) {
        alert("Image must be <4MB in size.");
        return false;
      }

      var metadata = {
        contentType: file.type
      };
      var uploadTask = St.ref(this.$data.filePath + file.name).put(
        file,
        metadata
      );
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.fileProgress = progress;
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
          this.fileProgress = 0;
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            Datab.collection(this.filePath).add({
              name: file.name,
              caption: this.caption,
              text: this.text,
              timestamp: new Date(),
              url: downloadURL
            });
          });
        }
      );
      return true;
    },
    uploadFileGroup(fileGroup) {
      var fileIndex = Number;

      for (fileIndex = 0; fileIndex < fileGroup.length; fileIndex++) {
        var file = fileGroup[fileIndex];
        //console.log(file);
        var fileSize = (file.size / 1024 / 1024).toFixed(4);

        var metadata = {
          contentType: file.type,
          name: file.name
        };
        var fileGroupPathParsed = this.$data.fileGroupPath;
        //console.log(fileGroupPathParsed + "/" + file.name);

        var uploadTasks = [];

        uploadTasks.push(
          St.ref(fileGroupPathParsed + "/" + file.name).put(file, metadata)
        );
        console.log(uploadTasks);

        uploadTasks[fileIndex].on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          snapshot => {
            var progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.fileGroupProgress += progress / fileGroup.length;
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED:
                console.log("Upload is paused");
                break;
              case firebase.storage.TaskState.RUNNING:
                //console.log("Upload is running:" + progress);
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
            this.fileGroupProgress = this.fileGroupProgress - 100;
            uploadTasks[fileIndex].snapshot.ref
              .getDownloadURL()
              .then(downloadURL => {
                console.log(
                  "name:" + uploadTasks[fileIndex].snapshot.metadata.name
                );
                console.log("url:" + downloadURL);
                Datab.collection(this.fileGroupPath).add({
                  name: uploadTasks[fileIndex].snapshot.metadata.name,
                  timestamp: new Date(),
                  url: downloadURL
                });
              });
          }
        );
      }
      console.log(uploadTasks);
      return true;
    }
  },
  computed: {
    binding() {
      const binding = {};

      if (!this.$vuetify.breakpoint.mdAndUp) {
        binding.column = true;
        binding.style = "width:100%";
      }

      return binding;
    }
  }
};
</script>

<style>
</style>


