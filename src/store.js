import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    owner:""
  },
  mutations: {

  },
  actions: {
    showStores({ commit }, payload = {}) {
      axios({
        method: 'get',
        url: '/xiongwei/',
        params: {
         owner:payload.owner
        }
      }).then((response) => {
        commit("setStudents", response.data.rows);
        commit('setPagination', response.data);
      })
    }
  }
})
