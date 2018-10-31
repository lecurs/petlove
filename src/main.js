import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Reg from './components/reg'
import Login from './components/login'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  Reg,
  Login,
  render: h => h(App)
}).$mount('#app')
