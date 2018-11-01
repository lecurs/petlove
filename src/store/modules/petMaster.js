import axios from "axios"
const state = {
    allPetMaster: [],
    allpetMasterPagenetion:{}
}
const mutations = {
    setAllPetMaster(state, allPetMaster) {
        state.allPetMaster = allPetMaster;
    },
    serAllpetMasterPagenetion(state,allpetMasterPagenetion){
        state.allpetMasterPagenetion=allpetMasterPagenetion;
    }
}
const getters = {

}
const actions = {
    getAllPetMaster({
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: 'get',
            url: "/xiajing/getPetMaster",
            params: {
                page: payload.page || 1,
                rows: payload.rows || 5
            }
        }).then(res => {
            commit("setAllPetMaster",res.data.rows);
            commit("serAllpetMasterPagenetion",res.data);
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