var routes = [
  {
    path: '/',
    component: {
      template: `<h1>首页</h1>`
    }
  },
  {
    path: '/a',
    meta: {
      login_required: true,
    },
    component: {
      template: `<h1>A</h1>`
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
    meta: {
      login_required: true
    },
    component: {
      template: `<div>
        <h1>帖子管理</h1>
        <router-link to="rain" append>后座</router-link>
        <router-view></router-view>
      </div>`,
    },
    children: [
      {
        path: 'rain',
        component: {
          template: `<h2>雨天asdf后座</h2>`
        }
      }
    ]
  },
];

var router = new VueRouter({
  routes: routes,
});

router.beforeEach(function (to, from, next) {
  var logged_in = true;

  if (!logged_in && to.matched.some(function (item) {
      return item.meta.login_required;
    }))
    next('/login');
  else
    next();
});

new Vue({
  el: '#app',
  router: router,
});
