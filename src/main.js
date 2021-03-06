import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import jQuery from "jquery"
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
// global.jQuery = jQuery
// global.$ = jQuery

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
