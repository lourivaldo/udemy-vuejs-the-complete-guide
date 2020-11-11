import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import User from './components/user/User'

Vue.use(Router);

export default new Router({
    // mode: 'hash', // default
    mode: 'history',
    routes:[
        {path: '/', component: Home},
        {path: '/user/:id', component: User, props: true},
    ]
})
