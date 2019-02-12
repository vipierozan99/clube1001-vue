<template>
  <div class="admin">
    <b-button @click="logout" size="lg" variant="danger">Hello {{currentUser}}, Logout!</b-button>
    <img-uploader/>
  </div>
</template>
<script>
import ImgUploader from "../components/ImgUploader";
import { Auth } from "../firebase.js";

export default {
  name: "admin",
  components: {
    ImgUploader
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

