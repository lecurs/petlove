import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import AdminAccount from "./modules/adminAccount";
import UsersAccount from "./modules/usersAccount";
import UserAudit from "./modules/userAudit";
import StoreAudit from "./modules/storeAudit";
import PetMaster from "./modules/petMaster";
import Supplier from "./modules/supplier";
import StoreManage from "./modules/storeManage";
import XiongPlus from './modules/xiongPlus.js';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AdminAccount,
    UsersAccount,
    UserAudit,
    StoreAudit,
    PetMaster,
    Supplier,
    StoreManage,
XiongPlus
  },
  state: {
    session: {},
  },
  mutations: {
    setSession(state, session) {
      state.session = session;
    }
  },
  getters: {

  },
  actions: {

  }
});