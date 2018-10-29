import Vue from 'vue'
import Router from 'vue-router'
// import Login from "./components/login/index.vue"
import SellerManage from "./components/sellerManage/index.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'sellerManage',
      component: SellerManage
    }, 
    {
      path: '/sellerManage',
      name: 'sellerManage',
      component: SellerManage
    }, 
  ]
})
