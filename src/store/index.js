import Vue from 'vue'
import Vuex from 'vuex'
import students from "./modules/students"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    students
  },
  state: {
    count: 0,
    price: 100,
    user: {}
  },
  mutations: {

    increment() {
      this.state.count++
    },
    setPrice(state, payload) {
      state.price = payload.price;
    }
  },
  getters: {
    getPrice(state) {
      return "$" + state.price;
    }
  },
  actions: {
    setPrice({
      commit
    }, payload) {
      setTimeout(function () {
        commit("setPrice", payload);
      }, 1000);
    },
  }
})