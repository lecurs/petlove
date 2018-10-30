
import axios from "axios"
const state = {

    students: [],
    student: {},
    pagination: {}
}
const mutations = {
    setStudents(state, students) {
        state.students = students;
    },
    setStudent(state, student) {
        state.student = student;
    },
    setPagination(state, pagination) {
        state.pagination = pagination;
    },
}
const getters = {

}
const actions = {
    setStudent({
        commit
    }, id) {
        axios({
            url: "/students/" + id,
            method: "get"
        }).then(response => {
            // this.$emit("setStudent", response.data);
            // this.$root.setStudent(response.data);
            // this.setStudent(response.data);
            console.log("student",response.data);
            commit("setStudent", response.data);
        });
    },
    setStudents({
        commit,
        dispatch
    }, payload = {}) {
        console.log("payload", payload);
        axios({
            url: "/students",
            method: "get",
            params: {
                page: payload.page || 1,
                rows: payload.rows || 5
            }
        }).then((response) => {
            // console.log(response.data);
            // this.students = response.data;
            // this.setStudents(response.data.rows);
            // this.setPagination(response.data);
            commit("setStudents", response.data.rows);
            commit("setPagination", response.data);

        });
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    getters,
    actions
}