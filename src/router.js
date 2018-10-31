import Vue from 'vue'
import Router from 'vue-router'
import Login from "./components/login/index.vue"
import Orders from "./components/orders"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }, 
  ]
})
