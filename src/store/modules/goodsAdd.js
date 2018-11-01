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
    addGoods({ commit, dispatch }, payload = {}) {
        axios({
            method: 'post',
            url: '/xiongwei/goodsAdd',
            data: {
                name: payload.name,
                type: payload.type,
                material: payload.material,
                whatAge: payload.whatAge,
                specialFor: payload.specialFor,
                weight: payload.weight,
                tasty: payload.tasty,
                workFor: payload.workFor,
                area: payload.area,
                longLife: payload.longLife,
                productDate: payload.productDate,
                supplier: payload.supplier,
                price: payload.price,
                owners: payload.owners
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