import axios from "axios"
const state = {
    usersAuditData: [],
    usersAuditPagenation: {},
    auditWinVisible:false,
    applicationContent:{}
}
const mutations = {
    setUsersAuditData(state, usersAuditData) {
        state.usersAuditData = usersAuditData;

    },
    setUsersAuditPagenation(state, usersAuditPagenation){
        state.usersAuditPagenation=usersAuditPagenation
    },
    setauditWinVisible(state,auditWinVisible){
        state.auditWinVisible=auditWinVisible;
    },
    setApplicationContent(state,applicationContent){
        state.applicationContent=applicationContent;
    }
}
const getters = {

}
const actions = {

    getApplications({
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: "get",
            url: "/xiajing/getApplications",
            params: {
                source: payload.source
            }
        }).then(res => {
            // console.log('====================================');
            // console.log(res.data.rows);
            // console.log('====================================');
            commit('setUsersAuditData', res.data.rows);
            commit("setUsersAuditPagenation",res.data)
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