import Vue from 'vue'
import Router from 'vue-router'
// import Login from "./components/login/index.vue"
import SellerManage from "./components/sellerManage/index.vue"
import MyStores from "./components/myStores/index.vue"
import ManageCenter from "./components/manageCenter/index.vue"
import StoreDetail from "./components/myStores/StoreDetail.vue"

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
      component: SellerManage,
      children: [
        {
          path: 'myStores',
          component: MyStores,
          children:[
            {
              path:'StoreDetail',
              component:StoreDetail
            }
          ]
        },
        {
          path: 'manageCenter',
          component: ManageCenter
        }
      ]
    }
  ]
})
