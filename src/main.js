import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import router from './router'
import store from './store'
import { auth } from './plugins/firebase'


Vue.config.productionTip = false
let app
auth.onAuthStateChanged(() => {
  if (!app) {
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
  }
})