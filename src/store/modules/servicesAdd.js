import axios from "axios"

const state = {
    ownerId: '',
    session: {}
}
const mutations = {
    setOwnerId(state, ownerId) {
        state.ownerId = ownerId;
    },
    setSession(state, session) {
        state.session = session;
    }
}
const getters = {

}

const actions = {
    setOwnerId({ commit, dispatch }, id) {
        axios({
            method: 'get',
            url: '/xiongwei/getOwner',
            params: {
                userId: id
            }
        }).then((res) => {
            console.log(res.data, "123321")
            commit('setOwnerId', res.data);


        })
    },
    addServices({ commit, dispatch }, payload = {}) {
        axios({
            method: 'post',
            url: '/xiongwei/servicesAdd',
            data: {
                name: payload.name,
                staffLevel: payload.staffLevel,
                timeLong: payload.timeLong,
                basePrise: payload.basePrise,
                workTime: payload.workTime,
                weight: payload.weight,
                owners: payload.owners,
                stores:payload.stores
            }
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