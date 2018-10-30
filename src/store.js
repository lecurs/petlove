import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    owner: "",
    stores: [],
    store: {},
    storeId:'',
    ownerId:'',
    goodsOfStore:[],
    servicesOfStore:[],
    myGoods:[]
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
    setOwnerId(state,ownerId){
      state.ownerId=ownerId;
    },
    getGoodsById(state,goodsOfStore){
      state.goodsOfStore=goodsOfStore;
    },
    getServicesById(state,servicesOfStore){
      state.servicesOfStore=servicesOfStore;
    },
    getMyGoods(state,myGoods){
      state.myGoods=myGoods;
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
        url:'/xiongwei/goodsOfStore/'+id
      }).then((response)=>{
        commit('getGoodsById',response.data)
      });
    },
    getServicesById({commit},id){
      axios({
        method:'get',
        url:'/xiongwei/servicesOfStore/'+id
      }).then((response)=>{
        commit('getServicesById',response.data)
      });
    },
    getMyGoods({commit},id){
      axios({
        method:'get',
        url:'/xiongwei/getMyGoods/'+id
      }).then((response)=>{
        commit('getMyGoods',response.data)
      });
    }
  }
})
