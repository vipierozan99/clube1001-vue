<template>
  <div class="gallery">
    <v-container class="singleGallery">
      <v-container fluid class="p-4 bg-dark">
        <h1 class="capitalize">{{galleryTitle()}}</h1>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex v-for="(img,index) in static_images" :key="index" xs4>
              <v-img :src="img.url" height="100%" @click="inspectImg(index)"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>
    </v-container>

    <!-- Modal Component -->
    <v-dialog v-model="dialog" lazy scrollable="false">
      <img :src="inspectImgSrc" style=" max-height:1400px;">
    </v-dialog>
    <v-dialog v-model="dialogLoading">
      <v-card dark>
        <v-card-text>Please stand by
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { Datab } from "../firebase.js";
export default {
  name: "gallery",
  props: {
    path: String
  },
  firestore() {
    return {
      static_images: Datab.collection(this.path)
    };
  },
  data() {
    return {
      inspectImgSrc: null,
      inspectImgTitle: null,
      dialog: false,
      dialogLoading: false
    };
  },
  methods: {
    inspectImg(index) {
      this.dialog = false;
      this.inspectImgSrc = this.static_images[index].url;
      this.inspectImgTitle = this.static_images[index].caption;
      this.dialogLoading = true;
      setTimeout(() => {
        this.dialogLoading = false;
        this.dialog = true;
      }, 500);
    },
    galleryTitle() {
      return this.path.substring(14).replace(/-/g, " ");
    }
  }
};
</script>
<style >
.capitalize {
  text-transform: capitalize;
}
.container {
  padding: 0 0 0 0;
}
.bg-dark {
  background-color: #3c3d3e !important;
  border-radius: 11px 11px 11px 11px;
  -moz-border-radius: 11px 11px 11px 11px;
  -webkit-border-radius: 11px 11px 11px 11px;
  border: 0px solid #000000;
}
.singleGallery {
  padding: 5px 5px;
  margin: auto;
  margin-bottom: 0;
  border-radius: 0.3rem;
  max-width: 1200px;
}
.p-4 {
  padding: 0.5rem !important;
}
</style>
<style scoped>
h1,
.h1 {
  font-size: 22px;
  color: #e6e9ec;
}
@media screen and (min-width: 320px) {
  h1,
  .h1 {
    font-size: calc(22px + 6 * ((100vw - 320px) / 680));
  }
}
@media screen and (min-width: 1000px) {
  h1,
  .h1 {
    font-size: 60px;
  }
}
</style>



