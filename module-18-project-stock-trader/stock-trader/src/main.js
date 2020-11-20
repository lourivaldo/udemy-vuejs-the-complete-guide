import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import './plugins/axios'

import router from './router'
import store from './store/store'

Vue.config.productionTip = false
Vue.filter('currency', value => {
    return 'R$' + value.toLocaleString()
});

new Vue({
	render: h => h(App),
    router,
    store,
}).$mount('#app')
