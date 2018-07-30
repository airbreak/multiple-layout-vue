import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/layout'
import LayoutMenu from '@/layout/layoutMenu'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'world',
      component: LayoutMenu,
      meta: { keepAlive: true },
      redirect: '/world'
    },
    {
      path: '/world',
      name: 'world',
      component: LayoutMenu,
      meta: { keepAlive: true },
      redirect: '/world/index',
      children: [
        {
          path: 'index',
          name: 'computed',
          meta: { keepAlive: true },
          component: HelloWorld
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Layout,
      meta: { keepAlive: true },
      redirect: '/home/index',
      children: [
        {
          path: 'index',
          name: 'computed',
          meta: { keepAlive: true },
          component: Home
        },
        {
          path: 'detail/:id',
          name: 'computed',
          meta: { keepAlive: true },
          component: detail
        }
      ]
    }
  ]
})
