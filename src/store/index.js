import Vue from 'vue'
import Vuex from 'vuex'
import AdminAccount from "./modules/adminAccount";
import UsersAccount from "./modules/usersAccount";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AdminAccount,UsersAccount
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