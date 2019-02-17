<template>
  <v-carousel height="800">
    <v-carousel-item v-for="(item,i) in static_images" :key="i" :src="item.url"></v-carousel-item>
  </v-carousel>
</template>

<script>
import { Datab } from "../firebase.js";

export default {
  name: "VtCarousel",
  props: {
    path: String
  },
  data() {
    return {
      static_images: []
    };
  },
  firestore() {
    return {
      static_images: Datab.collection(this.path)
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
