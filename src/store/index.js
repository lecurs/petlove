import Vue from 'vue'
import Vuex from 'vuex'
import AdminAccount from "./modules/adminAccount";
import UsersAccount from "./modules/usersAccount";
import UserAudit from "./modules/userAudit";
import StoreAudit from "./modules/storeAudit";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AdminAccount,UsersAccount,UserAudit,StoreAudit
  },
  state: {

  },
  mutations: {

  },
  getters: {

  },
  actions: {

  }
});