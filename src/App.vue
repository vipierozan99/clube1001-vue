<template>
  <div id="app">
    <main-nav-bar/>
    <router-view></router-view>
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




<style lang="scss" scoped>
#app {
  background-color: #e9ecef;
}
</style>
