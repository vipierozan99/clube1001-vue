<template>
  <div class="DbTabs">
    <h1>Diretoria</h1>

    <v-tabs dark show-arrows card>
      <v-tabs-slider dark></v-tabs-slider>
      <v-tab
        v-for="diret in diretorias"
        :key="diret.title"
        :href="'#tab-' + diret.title"
      >{{diret.title}}</v-tab>
      <v-tab href="#tab-provisoria">Provisória</v-tab>
      <v-tabs-items>
        <v-tab-item v-for="diret in diretorias" :key="diret.title" :value="'tab-' +  diret.title">
          <v-card v-if="diret" class="center-text">
            <v-card-text>
              <p v-if="diret.presidente_de_honra">
                <b>Presidente de Honra:</b>
                {{diret.presidente_de_honra}}
              </p>
              <p v-if="diret.presidente">
                <b>Presidente:</b>
                {{diret.presidente}}
              </p>
              <p v-if="diret.vice_presidente">
                <b>Vice-Presidente:</b>
                {{diret.vice_presidente}}
              </p>
              <p v-if="diret.tesoureiro">
                <b>Tesoureiro:</b>
                {{diret.tesoureiro}}
              </p>
              <p v-if="diret.secretario">
                <b>Secretário:</b>
                {{diret.secretario}}
              </p>
              <p v-if="diret.diretor_de_patrimonio">
                <b>Diretor de Patrimônio:</b>
                {{diret.diretor_de_patrimonio}}
              </p>
              <p v-if="diret.diretor_de_esportes">
                <b>Diretor de Esportes:</b>
                {{diret.diretor_de_esportes}}
              </p>
              <p v-if="diret.diretor_cultural">
                <b>Diretor Cultural:</b>
                {{diret.diretor_cultural}}
              </p>
              <p v-if="diret.diretor_social">
                <b>Diretor de Social:</b>
                {{diret.diretor_social}}
              </p>
              <p v-if="diret.orador_oficial">
                <b>Orador Oficial:</b>
                {{diret.orador_oficial}}
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item value="tab-provisoria">
          <v-card class="center-text">
            <v-card-text>
              <p>
                <b>Presidente:</b>Leonel Arcângelo Pavan
              </p>
              <p>
                <b>Vice-Presidente:</b>Arnaldo Lermen
              </p>
              <p>
                <b>Secretário:</b>Vitor Antonio Pinto
              </p>
              <p>
                <b>Tesoureiro:</b>Roque Ângelo Ogliari
              </p>
              <p>
                <b>Diretor de Patrimônio:</b>Edson Olegário, João Luiz Francisco e Antonio Rech
              </p>
              <p>
                <b>Diretor de Mobilização:</b>Wirley B. Verch e Artílio Catafesta
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
import diretorias from "@/assets/diretorias";
export default {
  data() {
    return {
      diretorias: diretorias
    };
  }
};
</script>

<style>
.DbTabs {
  max-width: 800px;
  padding: 20px;
  margin: auto;
}
.postsText {
  max-width: 800px;
  margin-left: 200px;
}

.nav-link {
  color: #1cc04c;
  text-decoration: none;
  background-color: transparent;
}
.center-text {
  text-align: center;
}
</style>
<style scoped>
p {
  margin: 0;
}
</style>


