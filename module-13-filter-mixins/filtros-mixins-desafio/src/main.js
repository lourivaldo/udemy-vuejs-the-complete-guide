import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.filter('wordsSize', (value) => {
    return value.split(' ').map(word => `${word} (${word.length})`).join(' ');
});

new Vue({
    render: h => h(App),
}).$mount('#app');
