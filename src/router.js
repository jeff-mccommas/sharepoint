import Vue from 'vue'
import Router from 'vue-router'
import Tabs from './components/bsTabs.vue'
import Home from './components/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tabs',
    component: Tabs

  }
  ]
})
