import "@appnest/web-router";

customElements.whenDefined("router-slot").then(async () => {
  const routerSlot = document.querySelector("router-slot");
  await routerSlot.add([
    {
      path: "portfolio",
      component: () => import("./pages/coming-soon"),
      guards: [],
    },
    {
      path: "resume",
      component: () => import("./pages/coming-soon"),
      guards: [],
    },
    {
      path: "blog",
      component: () => import("./pages/coming-soon"),
      guards: [],
    },
    {
      path: "about-me",
      component: () => import("./pages/coming-soon"),
      guards: [],
    },
    {
      path: "",
      component: () => import("./pages/home"),
      guards: [],
    },
  ]);
});
