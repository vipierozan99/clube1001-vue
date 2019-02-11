<template>
  <div id="galleries">
    <gallery path="static_images-home"/>
    <gallery path="static_images-Fotos-Esporte"/>
    <gallery path="static_images-Fotos-Clube"/>
  </div>
</template>

<script>
import Gallery from "@/components/Gallery";
export default {
  name: "galleries",
  components: {
    Gallery
  }
};
</script>

