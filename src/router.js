import Vue from 'vue'
import Router from 'vue-router'
import SellerManage from "./components/sellerManage/index.vue"
import MyStores from "./components/myStores/index.vue"
import ManageCenter from "./components/manageCenter/index.vue"
import Adminmaster from "./components/adminmaster";
import AdminAccount from "./components/adminAccount";
import UserAccount from "./components/userAccount";
import StoreAudit from "./components/storeAudit";
import UserAudit from "./components/userAudit";
import PetMaster from "./components/petMaster";
import Supplier from "./components/supplier";
import Storemanage from './components/storeManage';
import Login from "./components/login/index.vue"
import Reg from './components/reg/index.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/sellerManage',
      name: 'sellerManage',
      component: SellerManage,
      children: [
        {
          path: 'myStores',
          component: MyStores
        },
        {
          path: 'manageCenter',
          component: ManageCenter
        }
      ]
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
    {
      path: '/adminmaster',
      name: 'adminmaster',
      component: Adminmaster,
      children: [{
          path: 'adminaccount',
          name: 'adminaccount',
          component: AdminAccount,
        },
        {
          path: 'userAccount',
          name: 'userAccount',
          component: UserAccount,
        },
        {
          path: 'userAudit',
          name: 'userAudit',
          component: UserAudit,
        },
        {
          path: 'storeAudit',
          name: 'storeAudit',
          component: StoreAudit,
        },
        {
          path: 'petMaster',
          name: 'petMaster',
          component: PetMaster,
        },
        {
          path: 'supplier',
          name: 'supplier',
          component: Supplier,
        },
        {
          path: 'storemanage',
          name: 'storemanage',
          component: Storemanage,
        }
      ]
    }

  ]
})