import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Find from '@/components/find'

import Liebiao from '@/components/liebiao'
import Xqing from '@/components/Xqing'

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
      path: '/indent',
      name: 'indent',
      component: Indent
    },
    {
      path:'/liebiao/:fid',
      name:'Liebiao',
     component:Liebiao,
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
    {
      path: '/xqing/:fids',
      name: 'Xqing',
      component: Xqing
    },

  ]
})
