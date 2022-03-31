import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Form from "../views/Form.vue";
import Preview from "../views/Preview.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Form",
    component: Form,
  },
  {
    path: "/Preview",
    name: "Preview",
    component: () =>
      import("../views/Preview.vue"),
  },  
];

const router = new VueRouter({
  routes,
});

export default router;
