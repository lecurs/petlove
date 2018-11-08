import Vue from 'vue'
import Vuex from 'vuex'
import storeuser from "./modules/storeuser"
import axios from "axios"
import AdminAccount from "./modules/adminAccount";
import UsersAccount from "./modules/usersAccount";
import UserAudit from "./modules/userAudit";
import StoreAudit from "./modules/storeAudit";
import PetMaster from "./modules/petMaster";
import Supplier from "./modules/supplier";
import StoreManage from "./modules/storeManage";
import orders from './modules/orders'
import XiongPlus from './modules/xiongPlus';
import goodsAdd from './modules/goodsAdd'
import servicesAdd from './modules/servicesAdd'
import stores from "./modules/stores";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    storeuser,
    AdminAccount,
    UsersAccount,
    UserAudit,
    StoreAudit,
    PetMaster,
    Supplier,
    StoreManage,
    orders,
    XiongPlus,
    goodsAdd,
    servicesAdd,
    stores
  },
  state: {
    // count: 0,
    // price: 100,
    // user: {}
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
