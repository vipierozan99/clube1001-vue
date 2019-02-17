<template>
  <nav>
    <v-toolbar dark class="hidden-sm-and-down" height="90">
      <v-toolbar-title>
        <v-btn flat to="/">
          <v-img :src="logo_src" width="200" alt/>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/" flat="flat">Home</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn to="/about" flat="flat">Sobre</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn to="/gallery" flat="flat">Galeria</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn to="/us" flat="flat">Nós</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div class="hidden-md-and-up">
      <v-expansion-panel dark>
        <v-expansion-panel-content>
          <div slot="header">
            <v-btn flat to="/">
              <v-img :src="logo_src" width="150" alt/>
            </v-btn>
          </div>
          <v-card>
            <v-btn to="/" flat="flat">Home</v-btn>
            <v-btn to="/about" flat="flat">Sobre</v-btn>
            <v-btn to="/gallery" flat="flat">Galeria</v-btn>
            <v-btn to="/us" flat="flat">Nós</v-btn>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavBar",
  data() {
    return {
      logo_src: "http://clube1001.com.br/assets/images/logo-head-.svg"
    };
  }
};
</script>

<style>
.theme--dark.v-expansion-panel .v-expansion-panel__container {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  background-color: #212121;
  color: #fff;
}
.theme--dark.v-sheet {
  background-color: #424242;
  border-color: #424242;
  color: #fff;
}
.v-btn {
  height: 80px;
}
</style>
