import axios from "axios"

const state = {
    stores: [],
    store: {},
    oldstore: {},
    session:{},
    ownerId: '',
    storesOfOwner:[]
}
const mutations = {
    setStores(state, stores) {
        state.stores = stores;
    },
    setStore(state, store) {
        state.store = store;
    },
    setoldStore(state, oldstore) {
        state.oldstore = oldstore;
    },
    setOwnerId(state, ownerId) {
        state.ownerId = ownerId;
    },
    setSession(state, session) {
        state.session = session;
    },
    showStores(state, storesOfOwner) {
        state.storesOfOwner = storesOfOwner;
    },
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
    setoldStore({
        commit
    }, id) {
        axios({
            url: "/zhaoqinglong/" + id,
            method: "get"
        }).then(response => {
            console.log("oldstore", response.data);
            commit("setoldStore", response.data);
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
    },
    showStores({ commit }, id) {
        axios({
            method: 'get',
            url: '/xiongwei',
            params: {
                ownerId: id
            }
        }).then((response) => {
            commit("showStores", response.data);
        });
    },
    setOwnerId({commit,dispatch},id) {
        axios({
            method:'get',
            url:'/xiongwei/getOwner',
            params:{
                userId:id
            }
        }).then((res)=>{
            console.log('wang',res.data);   
            commit('setOwnerId',res.data);
            dispatch('showStores',res.data);
            // console.log(this.state.XiongPlus)
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