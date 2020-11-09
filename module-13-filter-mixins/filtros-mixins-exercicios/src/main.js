import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('reverse', (value) => {
    return `${value}`.split('').reverse().join('');
});

Vue.mixin({
    data() {
        return {
            global: 'Estou no Mixin Global',
        }
    },
    created() {
        console.log('Global Mixin created');
    }
});
new Vue({
	render: h => h(App),
    created() {
        console.log('Vue Instance created');
    }
}).$mount('#app')
