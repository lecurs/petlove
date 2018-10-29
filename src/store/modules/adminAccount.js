import axios from "axios"
const state = {
    adminUser: [],
    adminUserPageation: {},
    updateAdminUser: {},
    updateVisible: false
}
const mutations = {
    setAdminUser(state, adminuser) {
        state.adminUser = adminuser;
    },
    setAdminUserPageation(state, adminUserPageation) {
        state.adminUserPageation = adminUserPageation;
    },
    setUpdateAdminUser(state, updateAdminUser) {
        state.updateAdminUser = updateAdminUser;
    },
    setUpdateVisible(state, updateVisible) {
        state.updateVisible = updateVisible;
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
                rows: payload.rows || 5,
                user:payload.user
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

            dispatch("getAdminUsers", {
                page: this.state.adminUserPageation.curpage
            });
        })

    },
    addAdminUser({
        commit,
        dispatch
    }, payload = {}) {
        axios({
            method: "post",
            url: "/xiajing/addAdminUser",
            data: {
                user: payload.user,
                phone: payload.phone,
                pwd: payload.pwd,
                privilege: "1",
                passed: "1"
            }
        }).then(res => {

            dispatch("getAdminUsers");
        });
    },
    subUpdateAdminUser({
        commit,
        dispatch
    }, payload = {}) {
        let id = payload._id;
        axios({
            method: "put",
            url: "/xiajing/updateAdminUser/" + id,
            data: {
                "phone": payload.phone,
                "user": payload.user,
                "pwd": payload.pwd,
                "passed": payload.passed,
                "privilege": payload.privilege
            }
        });
    },
    // serchAdmin ({
    //     commit,
    //     dispatch
    // }, payload = {}){
    //     dispatch('getAdminUsers',{ user:payload.user})
    //     axios({
    //         method:"get",
    //         url:"/xiajing/users",
    //         params:{
    //             user:payload.user
    //         }
    //     }).then(res=>{
    //         console.log('====================================');
    //         console.log(res.data);
    //         console.log('====================================');

    //         dispatch()
    //     })
    // }
}
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}