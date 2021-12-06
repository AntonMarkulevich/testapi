import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Description from "@/views/Description.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id",
    name: "Description",
    component: Description,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
