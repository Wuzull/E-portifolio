import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import About from "@/views/About.vue";
import Blogposts from "@/views/Blogposts.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/blog-posts",
      name: "blog posts",
      component: Blogposts,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
