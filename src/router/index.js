import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Index from '../pages/index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                }, {
                    path: '/product/:id',
                    name: 'product',
                    // 只有进入该路由时函数才会执行 并通过resolve将其抛出
                    component: resolve => require(['../pages/product.vue'], resolve)
                }, {
                    path: '/detail/:id',
                    name: 'detail',
                    component: () => import('../pages/detail.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../pages/login.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('../pages/cart.vue')
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('../pages/order.vue'),
            children: [
                {
                    path: 'list',
                    name: 'order-list',
                    component: () => import('../pages/orderList.vue')
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: () => import('../pages/orderConfirm.vue')
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: () => import('../pages/orderPay.vue')
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    component: () => import('../pages/alipay.vue')
                }
            ]
        }
    ]
})