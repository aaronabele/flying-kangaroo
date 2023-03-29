import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/cocktails",
    name: "cocktails",
    component: () =>
      import(/* webpackChunkName: "cocktails" */ "../views/CocktailsView.vue"),
  },
  {
    path: "/cocktail-mixer",
    name: "cocktail-mixer",
    component: () =>
      import(
        /* webpackChunkName: "cocktailmixer" */ "../views/CocktailMixerView.vue"
      ),
  },
  {
    path: "/about-us",
    name: "about-us",
    component: () =>
      import(/* webpackChunkName: "aboutus" */ "../views/AboutUsView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
