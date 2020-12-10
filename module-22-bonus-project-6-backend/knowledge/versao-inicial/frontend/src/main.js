import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false;
// TEMP
require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6Ik5vIGFkbSIsImVtYWlsIjoibm9hZG1AZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYwNzU2NTI3OSwiZXhwIjoxNjA3ODI0NDc5fQ.G8sJn25zwKDB5wMPJQabxyszB1GQlp9phx1f0QbxxUM'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
