import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    students: [],
    student: {},
    pagination: {}
  },
  mutations: {
    setUser(state, student) {
      state.student = student;
    },
    setUsers(state, students) {
      state.students = students;
    },
    setPagination(state,pagination){
      state.pagination = pagination;
    }
  },
  actions: {
    setUser({commit},id){
      axios({
        url:'/liufei/'+id,
        method:'get',
      }).then((response)=>{
        commit('setUser',response.data);
      });
    },
    // setStudents({commit},payload={}){
    //   axios({
    //     url:'/students',
    //     method:'get',
    //     params:{
    //       name:payload.name||'',
    //       value:payload.value||'',
    //       page:payload.page||1,
    //       rows:payload.rows||5,
    //     },
    //   }).then((response)=>{
    //     commit('setStudents',response.data.rows);
    //     commit('setPagination',response.data);
    //   })
    // },
    
  }
})
