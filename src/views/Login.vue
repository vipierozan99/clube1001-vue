<template>
  <div class="login">
    <b-jumbotron class="loginJumbo">
      <template slot="header">Login to admin page</template>

      <hr class="my-4">
      <b-form @submit="login">
        <b-form-group
          id="emailGroup"
          label="Email address:"
          label-for="emailInput"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="emailInput"
            type="email"
            v-model="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="passGroup" label="Passoword:" label-for="passInput">
          <b-form-input
            id="passInput"
            type="password"
            v-model="password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-jumbotron>
  </div>
</template>

<script>
import { Auth } from "../firebase";
export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      Auth.signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
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
.login {
  min-height: 1800px;
}
.loginJumbo {
  margin: auto;
  max-width: 800px;
}
.btn {
  margin: 2px;
}
</style>
