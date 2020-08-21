import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: '/posts',
            name: 'posts',
            component: () => import('./components/posts/Posts')
        },
        {
            path: '/categories',
            name: 'categories',
            component: () => import('./components/categories/Categories')
        }
    ]
})