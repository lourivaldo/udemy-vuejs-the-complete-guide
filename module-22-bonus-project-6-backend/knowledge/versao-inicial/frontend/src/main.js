import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false;
// TEMP
require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikxvcm8gViIsImVtYWlsIjoibG9yb0BnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjA3NTY2NzIwLCJleHAiOjE2MDc4MjU5MjB9.qyaznhU7TEoi8474D9oT5JWvDeNUvqE8V8AGOEptVMQ'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
