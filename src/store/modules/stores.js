import axios from "axios"

const state = {
    stores: [],
    store: {}
}
const mutations = {
    setStores(state, stores) {
        state.stores = stores;
    },
    setStore(state, store) {
        state.store = store;
    }
}
const getters = {

}

const actions = {
    setStore({
        commit
    }, id) {
        axios({
            url: "/zhaoqinglong/" + id,
            method: "get"
        }).then(response => {
            console.log("store", response.data);
            commit("setStore", response.data);
        });
    },
    setStores({
        commit,
        dispatch
    }, payload = {}) {
        // console.log(payload,12312312312132)
        axios({
            url: '/zhaoqinglong/all',
            method: 'get',
            params: {
                name: payload.name || '',
                value: payload.value || ''
            },
        }).then((response) => {
            commit("setStores", response.data);
        })
    },
    setOwners({
        commit,
        dispatch
    }, payload = {}) {
        axios({
            url: "/zhaoqinglong/owner/" + payload.ownerId,
            method: "put",
            data: {
                newStore: {
                    "$ref": "stores",
                    "$id": payload.storeId
                }
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