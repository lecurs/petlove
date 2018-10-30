import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    owner: "",
    stores: [],
    store:{}
  },
  mutations: {
    showStores(state, stores) {
      state.stores = stores;
    },
    getStoreById(state, store) {
      state.store = store;
    },
  },
  actions: {
    showStores({ commit }, payload = {}) {
      axios({
        method: 'get',
        url: '/xiongwei',
        params: {
         ownerId:payload.id
        }
      }).then((response) => {
        commit("showStores", response.data);
      })
    },
    getStoreById({commit},id){
      axios({
        method:'get',
        url:'/xiongWei/'+id
      }).then((response)=>{
        commit('getStoreById',response.data)
      })
    }
  }
})
