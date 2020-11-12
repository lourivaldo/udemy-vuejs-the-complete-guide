import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import User from './components/user/User'
import UserDetail from './components/user/UserDetail'
import UserList from './components/user/UserList'
import UserEdit from './components/user/UserEdit'
import Menu from './components/template/Menu';
import MenuAlt from './components/template/MenuAlt';

Vue.use(Router);

const router = new Router({
    // mode: 'hash', // default
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { selector: to.hash }
        }
        return {x: 0, y: 0}
    },
    routes:[
        {
            path: '/',
            // component: Home,
            name: 'home',
            components: {
                default: Home,
                menu: Menu,
            }
        },
        {
            path: '/user',
            // component: User,
            props: true,
            components: {
                default: User,
                menu: MenuAlt,
                'menu-footer': MenuAlt,
            },
            children: [
                {path: '', component: UserList},
                {
                    path: ':id',
                    component: UserDetail,
                    props: true,
                    beforeEnter: (to, from, next) => {
                        console.log('beforeEnter UserDetail');
                        next();
                    },
                },
                {path: ':id/edit', component: UserEdit, props: true, name: 'user-edit'},
            ],
        },
        {
            path: '/redirecionar',
            redirect: '/user'
        },
        {
            path: '*',
            redirect: '/'
        },
    ]
});

router.beforeEach((to, from, next) => {
    console.log('antes rotas -> global');
    // if (to.path !== '/user') {
    //     next('/user');
    // } else {
    //     next();
    // }
    // next(false); // aborta
    next();
});

export default router
