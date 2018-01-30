import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Find from '@/components/find'
import Liebiao from '@/components/liebiao'

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
      path:'/liebiao/:fid',
      name:'Liebiao',
      component:Liebiao
    }
  ]
})
