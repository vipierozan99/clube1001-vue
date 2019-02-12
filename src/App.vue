<template>
  <div id="app">
    <main-nav-bar/>
    <router-view></router-view>
    <hr class="footerCush">
  </div>
</template>

<script>
import MainNavBar from "@/components/MainNavBar";
export default {
  name: "app",
  components: {
    MainNavBar
  }
};
</script>




<style lang="scss">
#app {
  background-color: #e9ecef;
}
.footerCush {
  background-color: #e9ecef;
  height: 300px;
  margin: 0 0 0 0 !important;
  line-height: 0;
}
</style>
