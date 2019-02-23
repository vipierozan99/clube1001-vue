<template>
  <div class="admin">
    <div style="text-align:center; width:100%; padding:0; margin-bottom:10px; margin-top:10px">
      <v-btn
        @click="logout"
        style="margin:auto"
        large
        color="success"
      >Hello {{currentUser}}, Logout!</v-btn>
    </div>
    <eventCreator/>

    <img-uploader/>

    <member-manager/>
  </div>
</template>
<script>
import ImgUploader from "../components/ImgUploader";
import eventCreator from "../components/eventCreator";
import memberManager from "../components/memberManager";
import { Auth } from "../firebase.js";

export default {
  name: "admin",
  components: {
    ImgUploader,
    eventCreator,
    memberManager
  },
  data() {
    return {
      currentUser: Auth.currentUser.email
    };
  },
  methods: {
    logout() {
      Auth.signOut().then(() => {
        this.$router.replace("login");
      });
    }
  }
};
</script>

