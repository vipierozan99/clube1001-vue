<template>
  <div class="home">
    <b-jumbotron>
      <b-container fluid class="p-4 bg-dark">
        <b-img
          class="main-logo"
          fluid
          src="https://firebasestorage.googleapis.com/v0/b/clube-1001.appspot.com/o/static_images%2Flogo-head-.svg?alt=media&token=6a856b0e-9dd7-44a0-969d-c0f5274cd54e"
          alt="Thumbnail"
        />
      </b-container>
    </b-jumbotron>
    <b-jumbotron>
      <b-container fluid class="p-4 bg-dark">
        <bt-carousel path="static_images-home"/>
      </b-container>
    </b-jumbotron>
    <b-jumbotron>
      <b-container fluid class="p-4 bg-dark">
        <embed-map/>
      </b-container>
    </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src
import BtCarousel from "@/components/BtCarousel.vue";
import TestComp from "@/components/TestComp.vue";
import EmbedMap from "@/components/EmbedMap.vue";

export default {
  name: "home",
  components: {
    BtCarousel,
    TestComp,
    EmbedMap
  }
};
</script>
<style scoped>
.home {
  max-width: 1800px;
  margin: auto;
}
.bg-dark {
  background-color: #3c3d3e !important;
  border-radius: 11px 11px 11px 11px;
  -moz-border-radius: 11px 11px 11px 11px;
  -webkit-border-radius: 11px 11px 11px 11px;
  border: 0px solid #000000;
}
.jumbotron {
  padding: 5px 5px;
  margin-bottom: 0;
  background-color: #e9ecef;
  border-radius: 0.3rem;
}
.p-4 {
  padding: 0.5rem !important;
}
</style>
