var routes = [
  {
    path: '/',
    component: {
      template: `
      <div>
        <h1>首页</h1>
      </div>
      `,
    }
  },
  {
    path: '/user',
    components: {
      sidebar: {
        template: `
        <div>
          <ul>
              <li>用户列表</li>
              <li>权限管理</li>
          </ul>
        </div>
        `
      },
      content: {
        template: `
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti in, laborum molestias necessitatibus optio perferendis quaerat quas qui quisquam sapiente. Architecto corporis eos eum libero optio, perspiciatis quo rem vel!</div>
        `
      }
    }
  },
  {
    path: '/post',
    components: {
      sidebar: {
        template: `
        <div>
          <ul>
              <li>帖子列表</li>
              <li>标签管理</li>
          </ul>
        </div>
        `
      },
      content: {
        template: `
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti in, laborum molestias necessitatibus optio perferendis quaerat quas qui quisquam sapiente. Architecto corporis eos eum libero optio, perspiciatis quo rem vel!</div>
        `
      }
    }
  }
];

var router = new VueRouter({
  routes: routes,
});

new Vue({
  el: '#app',
  router: router,
});
