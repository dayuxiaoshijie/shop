import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import Cart from '@/views/Cart'
import Address from '@/views/Address'

Vue.use(Router)

export default new Router({
  routes: [
    // 定义商品列表路由
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    //定义购物车路由
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    //定义地址路由
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
  ]
})
