import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Find from '@/components/find'
import Mine from '@/components/mine'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  mode:"hash",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
