var routes = [
  {
    path: '/',
    component: {
      template: `<h1>首页</h1>`
    }
  },
  {
    path: '/login',
    component: {
      template: `<h1>登录</h1>`
    }
  },
  {
    path: '/post',
    component: {
      template: `<h1>帖子管理</h1>`
    }
  },
];

var router = new VueRouter({
  routes: routes,
});

router.beforeEach(function (to, from, next) {
  var logged_in = true;

  if (!logged_in && to.path == '/post')
    next('/login');
  else
    next();
});

router.afterEach(function (to, from) {

});

new Vue({
  el: '#app',
  router: router,
});
