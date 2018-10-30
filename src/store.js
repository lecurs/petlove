import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    owner: "",
    stores: [],
    store: {},
    storeId:'',
    myGoods:[],
    myServices:[]
  },
  mutations: {
    showStores(state, stores) {
      state.stores = stores;
    },
    getStoreById(state, store) {
      state.store = store;
    },
    setStoreId(state,storeId){
      state.storeId=storeId;
    },
    getGoodsById(state,myGoods){
      state.myGoods=myGoods;
    },
    getServicesById(state,myServices){
      state.myServices=myServices;
    }
  },
  actions: {
    showStores({ commit }, payload = {}) {
      axios({
        method: 'get',
        url: '/xiongwei',
        params: {
          ownerId: payload.id
        }
      }).then((response) => {
        commit("showStores", response.data);
      });
    },
    getStoreById({ commit }, id) {
      axios({
        method: 'get',
        url: '/xiongWei/' + id
      }).then((response) => {
        commit('getStoreById', response.data[0])
      });
    },
    getGoodsById({commit},id){
      axios({
        method:'get',
        url:'/xiongwei/myGoods/'+id
      }).then((response)=>{
        commit('getGoodsById',response.data)
      });
    },
    getServicesById({commit},id){
      axios({
        method:'get',
        url:'/xiongwei/myServices/'+id
      }).then((response)=>{
        commit('getServicesById',response.data)
      });
    }
  }
})
