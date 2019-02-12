<template>
  <div class="DbTabs">
    <h1>Diretoria</h1>
    <b-card no-body>
      <b-tabs card>
        <b-tab v-for="diret in diretorias" :title="diret.title" :key="diret.title">
          <div v-if="diret" class="postsText">
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
          </div>
        </b-tab>
        <b-tab class="postsText" title="Provisória">
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
        </b-tab>
      </b-tabs>
    </b-card>
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
</style>
<style scoped>
p {
  margin: 0;
}
</style>


