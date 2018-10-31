import axios from "axios"

const state = {
  orders: [],
  order: [],
  openflag: false,
  pages: {},
}
const mutations = {
  setOrders(state, orders) {
    state.orders = orders
  },
  setOrder(state, order) {
    state.order = order
  },
  setOpenflag(state) {
    state.openflag = true
  },
  setPages(state, pages) {
    state.pages = pages
  },
}
const getters = {

}

const actions = {
  setOrders({ commit }, payload = {}) {
    axios({
      method: "get",
      url: "/wangqinbing",
      params: {
        type: payload.type || "",
        value: payload.value || "",
        page: payload.page || 1,
        rows: payload.rows || 3
      }
    }).then(response => {
      console.log(response.data)
      // this.students = response.data.rows;
      // this.pages={maxpage:response.data.maxpage,curpage:response.data.curpage}
      // console.log(response.data.rows)
      commit("setOrders", response.data.rows);
      commit("setPages", response.data);
    });
  },
  delOrder({ commit, dispatch }, id) {

    axios({
      method: "delete",
      url: "/wangqinbing/" + id
    }).then(() => {
      dispatch("setOrders")
    });
  },
  setOrder({ commit }, id) {
    console.log(id)
    axios({
      method: "get",
      url: "/wangqinbing/" + id
    }).then((response) => {
      // console.log(response.data)
      // this.$emit('setStudent',response.data)
      commit("setOrder", response.data)

    })
  },
  updateOrder({ commit, dispatch }, payload = {}) {
    console.log(payload.state)
    axios({
      method: "put",
      url: "/wangqinbing/" + payload.id,
      data: {
        consignee: payload.consignee,
        consignphone: payload.consignphone,
        consignadr: payload.consignadr,
        state: payload.state,
      }
    }).then(() => {
      dispatch("setOrders");
      console.log(this.state.stores)
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}