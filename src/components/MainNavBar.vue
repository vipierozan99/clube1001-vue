<template>
  <nav>
    <v-toolbar dark class="hidden-sm-and-down" height="90">
      <v-toolbar-title>
        <v-btn flat to="/">
          <v-img :src="logo_head" width="200" alt/>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/" flat="flat">Home</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn to="/calendar" flat="flat">Calendário</v-btn>
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
              <v-img :src="logo_head" width="150" alt/>
            </v-btn>
          </div>
          <v-card>
            <v-btn to="/" flat="flat">Home</v-btn>
            <v-btn to="/calendar" flat="flat">Calendário</v-btn>
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
import logo_head from "@/assets/logo-head.svg";
export default {
  name: "MainNavBar",
  data() {
    return {
      logo_head: logo_head
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
