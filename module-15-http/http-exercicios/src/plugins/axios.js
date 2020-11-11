import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://cod3r-vuejs.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'Bearer 1234'
// axios.defaults.headers.get['Accept'] = 'application/json'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://cod3r-vuejs.firebaseio.com/',
            headers: {
                'Authorization': 'Bearer 1234',
                // get: {
                //     'Authorization': 'Bearer 1234',
                // }
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            // eslint-disable-next-line no-console
            console.log(config.method)
            // if (config.method == 'post') {
            //     config.method = 'put';
            // }
            return config;
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            const array = [];
            for (let key in res.data) {
                array.push({id: key, ...res.data[key]})
            }
            res.data = array;
            return res;
        }, error => Promise.reject(error))
    }
})