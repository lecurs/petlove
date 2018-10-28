import axios from "axios"
const state = {
    adminUser: [],
    adminUserPageation: {}
}
const mutations = {
    setAdminUser(state, adminuser) {
        state.adminUser = adminuser;
    },
    setAdminUserPageation(state, adminUserPageation) {
        state.adminUserPageation = adminUserPageation;
    }
}
const getters = {

}
const actions = {
    getAdminUsers({
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: "get",
            url: "/xiajing/users",
            params: {
                privilege: 1,
                page: payload.page || 1,
                rows: payload.rows || 5
            }
        }).then(res => {
            console.log(res.data);
            commit("setAdminUser", res.data.rows);
            commit("setAdminUserPageation", res.data)
        });
    },
    removeAdminUser({
        commit,
        dispatch
    }, payload = {}) {
        console.log(payload._id);
        axios({
            method: "delete",
            url: "/xiajing/delAdminUser",
            params: {
                id: payload._id
            }
        }).then(res => {
       
            dispatch("getAdminUsers",{page:this.state.adminUserPageation.curpage});
        })

    },
    addAdminUser({
        commit,
        dispatch
    }, payload = {}){
        axios({
            method:"post",
            url:"/xiajing/addAdminUser",
            data:{
                user:payload.user,
                phone:payload.phone,
                pwd:payload.pwd,
                privilege:"1",
                passed:"1"
            }
        }).then(res=>{
               
            dispatch("getAdminUsers");
        });
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}