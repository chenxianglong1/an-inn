import Vue from 'vue'
import App from './App.vue'
import Router from './routers/index.js'

new Vue({
  el: '#app',
  router:Router,
  render: h => h(App)
})
