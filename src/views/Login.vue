<template>
  <div class="login">
    <v-card dark class="login-card">
      <v-card-title>
        <h1 style="margin:auto">Login to Admin Page</h1>
      </v-card-title>
      <v-form ref="form" @submit="login">
        <v-container>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passRules"
            type="password"
            label="Password"
            required
          ></v-text-field>
        </v-container>
        <div style="text-align:right; width:100%; padding:10px;">
          <v-btn class="login-btn" type="submit" color="success">Login</v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { Auth } from "../firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passRules: [v => !!v || "Password is required"]
    };
  },
  methods: {
    login() {
      Auth.signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          //can use user as arg
          this.$router.replace("/admin");
        })
        .catch(err => {
          alert(err.message);
        });
    }
  }
};
</script>

<style>
.login-btn {
  height: 60px;
}

.login-card {
  max-width: 600px;
  margin: auto;
  margin-top: 30px;
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 0px solid #000000;
}
</style>
