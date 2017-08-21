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
  {
    path: '/user/:name',
    component: {
      template: `
      <div>
        <div>我叫：{{$route.params.name}}</div>
        <router-link to="more" append>更多信息</router-link>
        <router-view></router-view>
      </div>
      `,
    },
    children: [
      {
        path: 'more',
        component: {
          template: `
          <div>
          用户{{$route.params.name}}的详细信息
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum deleniti doloribus expedita inventore natus officiis quod quos similique voluptate! Distinctio nisi sequi tenetur voluptatum? Debitis iste neque pariatur voluptatibus?
           </div>
          `
        }
      }
    ]
  },
];

var router = new VueRouter({
  routes: routes,
});

new Vue({
  el: '#app',
  router: router,
});
