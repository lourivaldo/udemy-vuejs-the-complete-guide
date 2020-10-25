import Vue from 'vue'
import App from './App.vue'

import CounterComponent from './Counter.vue'

Vue.config.productionTip = false
Vue.component('app-counter', CounterComponent);

new Vue({
  render: h => h(App),
}).$mount('#app')
