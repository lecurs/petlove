import Vue from 'vue'
import Vuex from 'vuex'
import AdminAccount from "./modules/adminAccount";
import UsersAccount from "./modules/usersAccount";
import UserAudit from "./modules/userAudit";
import StoreAudit from "./modules/storeAudit";
import PetMaster from "./modules/petMaster";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AdminAccount,UsersAccount,UserAudit,StoreAudit,PetMaster
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