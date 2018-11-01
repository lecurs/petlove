import axios from "axios"
const state = {
    storeApplicationDate: [],
    storeApplicationPagenetion: {},
    auditWinVisible: false,
    applicationContent: {}
}
const mutations = {
    setStoreApplicationDate(state, storeApplicationDate) {
        state.storeApplicationDate = storeApplicationDate;
    },
    setStoreApplicationPagenetion(state, storeApplicationPagenetion) {
        state.storeApplicationPagenetion = storeApplicationPagenetion;
    },
    setauditWinVisible(state, auditWinVisible) {
        console.log('====================================');
        console.log("dakai窗口");
        console.log('====================================');
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
            console.log('====================================');
            console.log(res.data.rows);
            console.log('====================================');
            commit('setStoreApplicationDate', res.data.rows);
            commit("setStoreApplicationPagenetion", res.data)
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
            dispatch("getApplications", {
                source: 'store'
            });
        });
    },


    updateStorePassed({ //更改店铺信息
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: "put",
            url: "/xiajing/updateStorePassed/" + payload.id,
            data: {
                passed: payload.passed,
                newMsg: payload.newMsg
            }
        }).then(res => {
            dispatch('getApplications', {
                source: 'store'
            });
        })

    },


}
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}