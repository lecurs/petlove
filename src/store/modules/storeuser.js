import axios from "axios"
const state = {
  students: [],
  student: [],
  pagination: {}
}
const mutations = {
  setStudent(state, student) {
    state.student = student;
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
  setStudents({ commit }, payload = {}) {
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