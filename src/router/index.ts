import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { nextTick } from "vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: {
      title: "jan Sepon's Toki Pona website",
      description: "Welcome to my Toki Pona website!",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "About",
      description: "Read how and why I build this Toki Pona website.",
    },
  },
  {
    path: "/dict",
    name: "Dictionary",
    component: () =>
      import(/* webpackChunkName: "dict" */ "../views/Dictionary.vue"),
    meta: {
      title: "Dictionary",
      description:
        "Learn the meanings of each Toki Pona word, with example sentences.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

declare module "vue-router" {
  interface RouteMeta {
    title: string;
    description: string;
  }
}

const DEFAULT_TITLE = "jan Sepon's Toki Pona website";
const DEFAULT_DESCRIPTION = "Welcome to my Toki Pona website!";
router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", to.meta.description || DEFAULT_DESCRIPTION);
  });
});
export default router;
