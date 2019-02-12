import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Galleries from "./views/Galleries.vue";
import Admin from "./views/Admin.vue";
import Login from "./views/Login.vue";
import Us from "./views/Us.vue";

import { Auth } from "@/firebase.js";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/galleries",
      name: "galleries",
      component: Galleries
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/us",
      name: "us",
      component: Us
    }
  ]
});

router.beforeEach((to, from, next) => {
  let currentUser = Auth.currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else next();
});

export default router;
