import axios from "axios"
const state = {
    users: [],
    usersPagenation: {},
}
const mutations = {
    setUsers(state, users) {
        state.users = users;
    },
    setUsersPagenation(state, usersPagenation) {
        state.usersPagenation = usersPagenation;
    }
}
const getters = {

}
const actions = {
    getUsers({
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: "get",
            url: "/xiajing/usersAccount",
            params: {
                page: payload.page || 1,
                rows: payload.rows || 5,
                privilege: 0,
                passed: payload.passed || "",
            }
        }).then(res => {
            commit('setUsers', res.data.rows);
            commit('setUsersPagenation', res.data);
        });
    },
    updateUser({
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: 'put',
            url: "/xiajing/updateUser/" + payload.row._id,
            data: {
                user: payload.row.user,
                phone: payload.row.phone,
                pwd: payload.row.pwd,
                privilege: payload.row.privilege,
                passed: payload.row.passed
            }
        }).then(res => {})
    },
    getUserBytype({
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: "get",
            url: "/xiajing/usersAccountByType",
            params: {
                page: payload.page || 1,
                rows: payload.rows || 5,
                privilege: "0",
                passed: payload.passed || "",
            }
        }).then(res => {
            commit('setUsers', res.data.rows);
            commit('setUsersPagenation', res.data);
        });
    }

}
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}