import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    students: [],
    student:[],
    pagination: {}
  },
  mutations: {
    setStudent(state, student) {
      state.student = student;
    },
    setStudents(state, students) {
      state.students = students;
    },
    setPagination(state,pagination){
      state.pagination = pagination;
    }
  },
  actions: {
    setStudent({commit},id){
      axios({
        url:'/liufei/'+id,
        method:'get',
      }).then((response)=>{
        console.log(response.data);
        commit('setStudent',response.data.users);

      });
    },
    
    setStudents({commit},payload={}){
      axios({
        url:'/liufei',
        method:'get',
      }).then((response)=>{
        // console.log(response.data)
        commit('setStudents',response.data);
      })
    },
    
  }
})
