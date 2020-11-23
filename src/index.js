import "@appnest/web-router";

customElements.whenDefined("router-slot").then(async () => {
  const routerSlot = document.querySelector("router-slot");
  await routerSlot.add([
    {
      path: "portfolio",
      component: () => import("./pages/redirect"),
      guards: [],
    },
    {
      path: "resume",
      component: () => import("./pages/redirect"),
      guards: [],
    },
    {
      path: "blog",
      component: () => import("./pages/redirect"),
      guards: [],
    },
    {
      path: "about-me",
      component: () => import("./pages/coming-soon"),
      guards: [],
    },
    {
      path: "cover-letter/chess",
      component: () => import("./pages/cover-letter"),
      guards: [],
    },
    {
      path: "",
      component: () => import("./pages/home"),
      guards: [],
    },
  ]);
});
