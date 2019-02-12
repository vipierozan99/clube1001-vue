<template>
  <div class="gallery">
    <b-jumbotron>
      <b-container fluid class="p-4 bg-dark">
        <h1>{{galleryTitle()}}</h1>

        <b-row v-for="(row,rowIndex) in image_grid" :key="rowIndex">
          <b-col v-for="(img, colIndex) in row" :key="colIndex">
            <b-img v-if="img!=null" @click="inspectImg(rowIndex,colIndex)" fluid :src="img.url"/>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>

    <!-- Modal Component -->
    <b-modal centered size="xl" ref="inspectImgModal">
      <b-img fluid :src="inspectImgSrc"/>
    </b-modal>
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
      inspectImgSrc: null
    };
  },
  computed: {
    image_grid: function() {
      var rows = Math.ceil(this.static_images.length / 3);
      var bigArray = [];
      for (var i = 0; i < rows; i++) {
        bigArray[i] = [0, 0, 0];
      }
      var img = 0;
      for (var j = 0; j < rows; j++) {
        for (var i = 0; i < 3; i++) {
          bigArray[j][i] = this.static_images[img];
          img++;
        }
      }
      return bigArray;
    }
  },
  methods: {
    inspectImg(row, col) {
      this.inspectImgSrc = this.image_grid[row][col].url; //.attr("src", this.image_grid[row][col].url);
      this.$refs.inspectImgModal.show();
    },
    galleryTitle() {
      return this.path.substring(14).replace(/-/g, " ");
    }
  }
};
</script>
<style lang="scss" scoped>
.bg-dark {
  background-color: #3c3d3e !important;
  border-radius: 11px 11px 11px 11px;
  -moz-border-radius: 11px 11px 11px 11px;
  -webkit-border-radius: 11px 11px 11px 11px;
  border: 0px solid #000000;
}
.jumbotron {
  padding: 5px 5px;
  margin: auto;
  margin-bottom: 0;
  background-color: #e9ecef;
  border-radius: 0.3rem;
  max-width: 1000px;
}
.p-4 {
  padding: 0.5rem !important;
}
.row {
  margin-right: 0px;
  margin-left: 0px;
}
.col {
  padding-left: 0px;
  padding-right: 0px;
}
.img-fluid {
  max-width: 100%;
  height: 100%;
}

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
<style>
.modal-lg,
.modal-xl {
  max-width: 1400px !important;
  width: auto;
}
.modal-header {
  /* display: -ms-flexbox; */
  /* display: -webkit-box; */
  display: none !important;
}
.modal-footer {
  display: none !important;
}

.modal-body {
  max-height: 900px !important;
}
</style>

