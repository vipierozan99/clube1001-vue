import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import VueFirestore from "vue-firestore";

Vue.use(VueFirestore);

import form_file from "@/components/bootstrap/components/form-file";
Vue.component("b-form-file", form_file);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
