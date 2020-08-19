import Vue from 'vue'
import Router from 'vue-router'
import Welkom from '@/components/Welkom'
import Info from '@/components/Info'
import Ervaring from '@/components/Ervaring'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welkom',
      component: Welkom
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/ervaring',
      name: 'Ervaring',
      component: Ervaring
    }
  ]
})
