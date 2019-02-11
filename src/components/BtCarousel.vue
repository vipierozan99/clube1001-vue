<template>
  <b-carousel
    id="carousel1"
    style="text-shadow: 1px 1px 2px #333;"
    controls
    indicators
    background="#ababab"
    :interval="4000"
    img-width="1024"
    img-height="512"
    v-model="slide"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <!-- Text slides with image -->
    <b-carousel-slide
      v-for="img in static_images"
      :key="img.name"
      :caption="img.caption"
      :text="img.text"
      :img-src="img.url"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script>
import { db } from "../firebase.js";

export default {
  name: "BtCarousel",
  props: {
    path: String
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      static_images: []
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },
  firestore() {
    return {
      static_images: db.collection(this.path)
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
