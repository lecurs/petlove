import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import ElementUI from 'element-ui';
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css';
import './assets/iconfont/iconfont.css'
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
