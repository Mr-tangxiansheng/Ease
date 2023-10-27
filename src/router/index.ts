import {
  createWebHashHistory,
  createRouter,
  createWebHistory,
} from "vue-router";

const { VITE_ROUTE_TYPE, VITE_BASE_URL } = import.meta.env;
export const router = createRouter({
  history:
    VITE_ROUTE_TYPE == "hash"
      ? createWebHashHistory(VITE_BASE_URL)
      : createWebHistory(VITE_BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/home",
      component: () => import("../layouts/BasicLayout/index.vue"),
      children: [
        {
          path: "home",
          name: "home",
          meta: { title: "首页" },
          component: () => import("../views/home/index.vue"),
        },
        {
          path: "about",
          name: "about",
          meta: { title: "关于" },
          component: () => import("../views/about/index.vue"),
        },
        {
          path: "content",
          name: "content",
          meta: { title: "内容" },
          component: () => import("../views/content/index.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/index.vue"),
    },
  ],
});
export async function setupRouter(app) {
  app.use(router);
  router.beforeEach((to, from, next) => {
    document.title = to.meta.title  as string
    next();
  });
}
