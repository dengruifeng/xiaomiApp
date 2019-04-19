import Vue from 'vue'
import App from './App.vue'
import './style/css/reset.css'
import router from './router'
import store from './store/index'
import Vant from 'vant';
import 'vant/lib/index.css';
 import './mockData/index'

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

