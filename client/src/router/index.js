import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '@/components/Catalog/Catalog'
import Basket from '@/components/Basket'
import Order from '@/components/Order'
import Login from '@/components/Auth/Login'
import Register from '@/components/Auth/Register'
import store from '@/store';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/basket',
      name: 'Basket',
      component: Basket
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
})


export default router;
