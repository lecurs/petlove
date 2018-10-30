import axios from "axios"
const state = {
    usersAuditData: [],
    usersAuditPagenation: {},
    auditWinVisible: false,
    applicationContent: {}
}
const mutations = {
    setUsersAuditData(state, usersAuditData) {
        state.usersAuditData = usersAuditData;

    },
    setUsersAuditPagenation(state, usersAuditPagenation) {
        state.usersAuditPagenation = usersAuditPagenation
    },
    setauditWinVisible(state, auditWinVisible) {
        state.auditWinVisible = auditWinVisible;
    },
    setApplicationContent(state, applicationContent) {
        state.applicationContent = applicationContent;
    }
}
const getters = {

}
const actions = {
    getApplications({ //获取未操作审核
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: "get",
            url: "/xiajing/getApplications",
            params: {
                source: payload.source,
                handle: "0",
            }
        }).then(res => {
            commit('setUsersAuditData', res.data.rows);
            commit("setUsersAuditPagenation", res.data)
        })
    },
    updateUserPassed({  //更改users信息
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: "put",
            url: "/xiajing/updateUserPassed/" + payload.id,
            data: {
                passed: payload.passed,
                ownnerid: payload.ownnerid,
                newMsg:payload.newMsg
            }
        }).then(res => {
            dispatch('getApplications',{source:'account'});
        })

    },
    updateApplication({ //更改审核信息的状态
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: "put",
            url: "/xiajing/updateApplications/" + payload.id,
            data: {
                handle: payload.handle,
                passed: payload.passed
            }
        }).then(res => {
            dispatch("getApplications",{source:'account'});
        });
    },
    addOwners({
        commit,
        dispatch
    }, payload = {}) { //新增用户通过后增加owners
        axios({
            method: "post",
            url: "/xiajing/addOwners",
            data: {
                users: {
                    $ref: "users",
                    $id: payload.id
                },
                stores: [],
                applications: {
                    add: [],
                    update: [],
                    remove: []
                }
            }

        }).then(res => {
            dispatch('updateUserPassed', {
                id: payload.id, //用户id
                ownnerid: res.data._id //ownerid
            })
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