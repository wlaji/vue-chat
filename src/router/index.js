import Vue from "vue";
import VueRouter from "vue-router";
import Chat from "../views/ChatDashBoard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component:()=> import("../views/Login.vue")
  },
  {
    path: "/chat",
    name: "chat",
    component: Chat
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
