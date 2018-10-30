import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    owner: "",
    stores: []
  },
  mutations: {
    showStores(state, stores) {
      state.stores = stores;
    }
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
    }
  }
})
