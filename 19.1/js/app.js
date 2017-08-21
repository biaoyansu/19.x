var routes = [
  {
    path: '/',
    component: {
      template: `
      <div>
        <h1>首页</h1>
      </div>
      `,
    },
  },
  {
    path: '/about',
    component: {
      template: `
      <div>
        <h1>关于我们</h1>
      </div>
      `,
    },
  },
];

var router = new VueRouter({
  routes: routes,
});

new Vue({
  el: '#app',
  router: router,
});
