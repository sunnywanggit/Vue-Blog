import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/template.vue'
import Create from '@/pages/Create/template.vue'
import User from '@/pages/User/template.vue'
import Detail from '@/pages/Detail/template.vue'
import My from '@/pages/My/template.vue'
import Login from '@/pages/Login/template.vue'
import Regiser from '@/pages/Regiser/template.vue'
import Edit from '@/pages/Edit/template.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/create',
      component: Create
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/regiser',
      component: Regiser
    },
    {
      path: '/user',
      component: User
    },
  ]
})
