import axios from "axios"
const state = {
  students: [],
  student: [],
  pagination: {},
  oldmsg:[]
}
const mutations = {
  setStudent(state, student) {
    state.student = student;
  },
  setoldmsg(state, oldmsg) {
    state.oldmsg = oldmsg;
  },
  setStudents(state, students) {
    state.students = students;
  },
  setPagination(state, pagination) {
    state.pagination = pagination;
  }
}
const actions = {
  setStudent({ commit }, id) {
    axios({
      url: '/liufei/' + id,
      method: 'get',
    }).then((response) => {
      console.log(response.data);
      commit('setStudent', response.data.users);
    });
  },
  setoldmsg({ commit }, id) {
    axios({
      url: '/liufei/' + id,
      method: 'get',
    }).then((response) => {
      console.log(response.data);
      commit('setoldmsg', response.data.users);
    });
  },
  setStudents({ commit,dispatch }, payload = {}) {
    axios({
      url: '/liufei',
      method: 'get',
    }).then((response) => {
      // console.log(response.data)
      commit('setStudents', response.data);
    })
  },

}
export default {
  namespaced: true,
  state,
  mutations,
  // getters,
  actions
}