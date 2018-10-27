import Vue from 'vue';
import Router from 'vue-router';
import Login from "./components/login/index.vue";
import Adminmaster from "./components/adminmaster";
import AdminAccount from "./components/adminAccount";
import UserAccount from "./components/userAccount";
import StoreAudit from  "./components/storeAudit";
import UserAudit from "./components/userAudit";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/adminmaster',
      name: 'adminmaster',
      component: Adminmaster,
      children:[
        {
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
        }
      ]
    }, 
  ]
})
