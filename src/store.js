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
    setOwnerId(state,ownerId){
      state.ownerId=ownerId;
    },
    getGoodsOfStore(state,goodsOfStore){
      state.goodsOfStore=goodsOfStore;
    },
    getServicesOfStore(state,servicesOfStore){
      state.servicesOfStore=servicesOfStore;
    },
    getMyGoods(state,myGoods){
      state.myGoods=myGoods;
    },
    getMyServices(state,myServices){
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
    // 获取每个门店的商品
    getGoodsOfStore({commit},id){
      axios({
        method:'get',
        url:'/xiongwei/goodsOfStore/'+id
      }).then((response)=>{
        commit('getGoodsOfStore',response.data);
      });
    },
    // 获取每个门店的服务
    getServicesOfStore({commit},id){
      axios({
        method:'get',
        url:'/xiongwei/servicesOfStore/'+id
      }).then((response)=>{
        commit('getServicesOfStore',response.data)
      });
    },
    // 获取店主所拥有商品
    getMyGoods({commit},id){
      axios({
        method:'get',
        url:'/xiongwei/getMyGoods/'+id
      }).then((response)=>{
        commit('getMyGoods',response.data)
      });
    },
    // 获取店主所拥有服务
    getMyServices({commit},id){
      axios({
        method:'get',
        url:'/xiongwei/getMyServices/'+id
      }).then((response)=>{
        commit('getMyServices',response.data)
      });
    }
  }
})
