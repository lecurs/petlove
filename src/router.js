import Vue from 'vue'
import Router from 'vue-router'
import Login from "./components/login/index.vue"
import System from "./components/system/index.vue"
import Stores from "./components/stores"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'system',
      component: System
    }, 
    {
      path: '/login',
      name: 'login',
      component: Login
    }, 
    {
      path: '/system',
      name: 'system',
      component: System,
      children:[
        {
          path: 'stores',
          name: 'stores',
          component: Stores
        }
      ] 
    }
  ]
})
