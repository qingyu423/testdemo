import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'qiankun-child',
    entry: '//localhost:8082',
    container: '#vueContainer',
    activeRule: '/vueChild',
  },
])
start();
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
