<template>
  <v-app>
    <main-nav-bar/>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title>
          <v-container grid-list-md text-xs-center>
            <v-layout align-center justify-center row wrap>
              <v-flex xs12 sm4 style>
                <v-img contain :src="logo_footer_src" alt/>
              </v-flex>
              <v-flex xs12 sm4 style="font-color:gray">ENDEREÇO
                <br>R. Santa Cecília, 1900
                <br>Várzia do Ranchinho,
                <br>Camboriú - SC, 88313-0509
                <br>
              </v-flex>
              <v-flex xs12 sm4 style="font-color:gray">CONTATOS
                <br>Email: clube1001@clube1001.com.br
                <br>Fone: +55 (47) 98820-6180 - Adalberto
                <br>Fax: +55 (47) 99965-2814 Ecônomo
                <br>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
          <v-btn to="/admin" style="height:20px">
            &copy;2019 —
            <strong>Clube 1001</strong>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import MainNavBar from "@/components/MainNavBar";
export default {
  name: "App",
  components: {
    MainNavBar
  },
  data() {
    return {
      logo_footer_src: "http://clube1001.com.br/assets/images/logo-foot-.svg"
    };
  }
};
</script>

<style scoped>
body {
  font-family: Roboto, sans-serif;
  line-height: 1.5;
}
.v-footer {
  margin-top: 50px;
}
</style>

