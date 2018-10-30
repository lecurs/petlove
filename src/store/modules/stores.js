import axios from "axios"

const state = {
    stores:[],
    store:{}
}
const mutations = {
    setStores(state,stores){
        state.stores = stores;
    },
    setStore(state,store){
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
            console.log("store",response.data);
            commit("setStore", response.data);
        });
    },
    setStores({
        commit,
        dispatch
    },payload={}){
        axios({
            url:'/zhaoqinglong/all',
            method:'get',
            data:{
                name:payload.name || '',
                value:payload.value || ''
            },
        }).then((response)=>{
            commit("setStores",response.data);
        })
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    getters,
    actions
}