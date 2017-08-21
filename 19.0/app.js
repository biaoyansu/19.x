var data = {
  username: null,
  password: null,
};

var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: {
        template: `<div><h1>首页 </h1><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aperiam, commodi eligendi fugit incidunt ipsam iusto minus necessitatibus perferendis quaerat repudiandae sapiente voluptatem? Consectetur consequatur nisi nulla rem rerum!</div></div>`
      }
    },
    {
      path: '/login',
      component: {
        template: `<div><h1>登录 </h1><div><div>  用户名：<input type="text" v-model="username"></div><div>密码：<input type="password" v-model="password"></div><div><button>登录</button></div></div></div>`,
        data: function () {
          return data;
        }
      }
    },
  ]
});

new Vue({
  el: '#app',
  router: router,
  data: data
});
