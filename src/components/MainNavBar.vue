<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">Clube 1001</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/galleries">Galeria</b-nav-item>
        <b-nav-item to="/us">Nós</b-nav-item>
        <b-nav-item to="/about">Sobre</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto"></b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "MainNavBar"
};
</script>

<style lang="scss" scoped>
.bg-info {
  background-color: #141617 !important;
}
</style>


