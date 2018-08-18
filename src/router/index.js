import Vue from 'vue'
import Router from 'vue-router'
import html404 from '@/pages/404'
import Home from '@/layout/Home'
import Index from '@/pages/Index'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/404',
      name: 'test',
      component: html404
    }
    ,
    {
      path: '/index',
      name: '',
      component: Index
    }
    ,
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
