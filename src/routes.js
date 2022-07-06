import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

const routerHistory = createWebHashHistory(process.env.BASE_URL)

import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import NotFoundPage from '@/pages/notFound'
import Item from '@/pages/_itemAlias'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: Item,
    }, 
    // {
    //   path: '/:CathAll(.*)',
    //   name: '404',
    //   component: NotFoundPage,
    // }    
  ]
})

export default routers