import Vue from 'vue'
import Vuex from 'vuex'
import AdminAccount from "./modules/adminAccount";
import UsersAccount from "./modules/usersAccount";
import UserAudit from "./modules/userAudit";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AdminAccount,UsersAccount,UserAudit
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