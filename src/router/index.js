import Vue from 'vue'
import VueRouter from 'vue-router'
import Orders from '../views/Orders.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/pedidos',
    name: 'pedidos',
    component: Orders
  },
  {
    path: '/pedido/:orderId',
    name: 'pedido',
    component: () => import('../views/OrderDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
