import Vue from 'vue'
import Router from 'vue-router'
import Login from "./components/login/index.vue"
import Manageuser from "./components/manageuser/index.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'manageuser',
      component: Manageuser
    }, 
    {
      path: '/manageuser',
      name: 'manageuser',
      component: Manageuser
    }, 
  ]
})
