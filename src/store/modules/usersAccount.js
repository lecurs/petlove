import axios from "axios"
const state = {
    users: [],
    usersPagenation: {},
}
const mutations = {
    setUsers(state, users) {
        state.users = users;
    },
    setUsersPagenation(state, usersPagenation){
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
                page: payload.page||1,
                rows: payload.rows||5,
                privilege: 0,
                passed:payload.passed||"",
            }
        }).then(res => {
            console.log('====================================');
            console.log(res.data);
            console.log('====================================');
            commit('setUsers',res.data.rows);
            commit('setUsersPagenation',res.data);
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