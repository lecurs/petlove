import axios from "axios"
const state = {
    allSupplier: [],
    supplierPagenation: {}
}
const mutations = {
    setAllSupplier(state, allSupplier) {
        state.allSupplier = allSupplier;
    },
    setSupplierPagenation(state, supplierPagenation) {
        state.supplierPagenation = supplierPagenation;
    },
}
const getters = {

}
const actions = {
    getAllSupplier({
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: 'get',
            url: "/xiajing/getAllSupplier",
            params: {
                page: payload.page || 1,
                rows: payload.rows || 5
            }
        }).then(res => {
            commit("setAllSupplier", res.data.rows);
            commit("setSupplierPagenation", res.data);
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