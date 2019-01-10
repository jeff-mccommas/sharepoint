import Vue from 'vue'
import Router from 'vue-router'
import TabsH from './components/bsTabs-h.vue'
import TabsV from './components/bsTabs-v.vue'
import bModal from './components/bsModal.vue'
import Home from './components/Home.vue'
import TodoList from './components/to-do-list.vue'

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
    path: '/tabs-h',
    component: TabsH
  },
  {
    path: '/tabs-v',
    component: TabsV
  },
  {
    path: '/bModal',
    component: bModal
  },
  {
    path: '/todolist',
    component: TodoList
  }
  ]
})
