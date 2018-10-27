import axios from "axios"
const state = {
    adminUser: [],
    adminUserPageation: {}
}
const mutations = {
    setAdminUser(state, adminuser) {
        state.adminUser = adminuser;
    },
    setAdminUserPageation(state, adminUserPageation) {
        state.adminUserPageation = adminUserPageation;
    }
}
const getters = {

}
const actions = {
    getAdminUsers({
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: "get",
            url: "/xiajing/users",
            params: {
                privilege: 1,
                page: payload.page || 1,
                rows: payload.rows || 5
            }
        }).then(res => {
            console.log(res.data);
            commit("setAdminUser", res.data.rows);
            commit("setAdminUserPageation", res.data)
        });
    },
    removeAdminUser({
        commit,
        dispatch
    }, payload = {}) {
        console.log(payload._id);
        axios({
            method: "delete",
            url: "/xiajing/delAdminUser",
            params: {
                id: payload._id
            }
        }).then(res => {
            console.log(res);
            dispatch("getAdminUsers");
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