<template>
  <div id="home">
    <div class="hero"></div>
    <vt-carousel path="static_images-home"/>
    <v-card class="map-presenter" dark color="secondary" style="padding: 30 30 30 30 !important;">
      <v-layout justify-center v-bind="binding" fill-height>
        <v-flex xs6 sm12>
          <v-container style="padding:2%">
            <embed-map/>
          </v-container>
        </v-flex>
        <v-flex xs6 sm12 style="margin-bottom:3%">
          <v-flex class="map-card-text" v-bind="sizing" light>
            <v-container>
              <b style="font-size:40px" font-weight-regular>
                <i class="material-icons md-36">location_on</i>
                Nosso Local
              </b>
              <br>
              <br>

              <p
                class="subheading"
                font-weight-thin
                font-italic
              >I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</p>
            </v-container>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import VtCarousel from "@/components/VtCarousel";
import EmbedMap from "@/components/EmbedMap.vue";

export default {
  name: "home",
  components: {
    VtCarousel,
    EmbedMap
  },
  computed: {
    binding() {
      const binding = {};

      if (!this.$vuetify.breakpoint.mdAndUp) {
        binding.column = true;
        binding.style = "width:100%";
      }

      return binding;
    },
    sizing() {
      const sizing = {};

      if (!this.$vuetify.breakpoint.mdAndUp) sizing.style = "height: 100%;";

      return sizing;
    }
  }
};
</script>

<style  scoped>
.v-card {
  padding: 30 30 30 30;
}
</style>


<style>
.map-presenter {
  height: 100%;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
  overflow-x: auto;
  /* border-radius: 21px 21px 21px 21px;
  -moz-border-radius: 21px 21px 21px 21px;
  -webkit-border-radius: 21px 21px 21px 21px;
  border: 0px solid #000000; */
}
.map-card-text {
  height: 80%;
  width: 80%;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
  position: relative;
  border-radius: 21px 21px 21px 21px;
  -moz-border-radius: 21px 21px 21px 21px;
  -webkit-border-radius: 21px 21px 21px 21px;
  border: 0px solid #000000;
  padding: 3%;
  background-color: white;
  color: black;
}

.headline {
  margin-top: 15px;
}
.md-36 {
  font-size: 36px;
}
</style>

