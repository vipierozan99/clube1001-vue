<template>
  <div class="google-maps">
    <iframe
      width="600"
      height="500"
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=canhanduba%20Clube%201001&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "EmbedMap"
};
</script>


<style scoped>
.google-maps {
  position: relative;
  padding-bottom: 25%;
  height: 0;
  overflow: hidden;
  margin: auto;
  width: 50%;
  border-radius: 21px 21px 21px 21px;
  -moz-border-radius: 21px 21px 21px 21px;
  -webkit-border-radius: 21px 21px 21px 21px;
  border: 0px solid #000000;
}
.google-maps iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
}
</style>

