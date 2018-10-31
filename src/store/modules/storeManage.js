import axios from "axios"
const state = {
    allStores: [],
    allStoresPagenetion: {},
}
const mutations = {
    setAllStores(state, allStores) {
        state.allStores = allStores;
    },
    setAllStoresPagenetion(state, allStoresPagenetion) {
        state.allStoresPagenetion = allStoresPagenetion;
    }
}
const getters = {

}
const actions = {
    getAllStores({
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: 'get',
            url: "/xiajing/getAllStores",
            params: {
                name:payload.name,
                page: payload.page || 1,
                rows: payload.rows || 5
            }
        }).then(res => {
            commit("setAllStores", res.data.rows);
            commit("setAllStoresPagenetion", res.data);
        })
    },
    updateStore({
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: 'put',
            url: "/xiajing/updateStore/" + payload.row._id,
            data: {
                passed: payload.row.passed
            }
        }).then(res => {})
    },
    getAllStoresByType({
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: "get",
            url: "/xiajing/getAllStoresByType",
            params: {
                page: payload.page || 1,
                rows: payload.rows || 5,
                passed: payload.passed || "",
            }
        }).then(res => {

            commit('setAllStores', res.data.rows);
            commit('setAllStoresPagenetion', res.data);
        });
    },
    
}
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}