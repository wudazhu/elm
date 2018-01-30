import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Find from '@/components/find'

import Liebiao from '@/components/liebiao'

import Mine from '@/components/mine'
import Login from '@/components/login'
import Indent from '@/components/indent'


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
<<<<<<< HEAD
      path: '/indent',
      name: 'indent',
      component: Indent
=======
      path:'/liebiao/:fid',
      name:'Liebiao',
      component:Liebiao
>>>>>>> f6f7fb8de2d64ff7cba1d97e0c087d9cc7a2363a
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
