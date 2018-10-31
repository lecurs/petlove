import Vue from 'vue'
import Router from 'vue-router'
import Login from "./components/login/index.vue"
import Reg from './components/reg/index.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'reg',
      component: Reg
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }, 
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    }, 
  ]
})
