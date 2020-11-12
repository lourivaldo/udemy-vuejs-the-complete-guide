import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import User from './components/user/User'
import UserDetail from './components/user/UserDetail'
import UserList from './components/user/UserList'
import UserEdit from './components/user/UserEdit'

Vue.use(Router);

export default new Router({
    // mode: 'hash', // default
    mode: 'history',
    routes:[
        {path: '/', component: Home, name: 'home'},
        {
            path: '/user',
            component: User,
            props: true,
            children: [
                {path: '', component: UserList},
                {path: ':id', component: UserDetail, props: true},
                {path: ':id/edit', component: UserEdit, props: true, name: 'user-edit'},
            ],
        },
    ]
})
