import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/pedidos',
    name: 'order-list',
    meta: {
      title: 'Lista de Pedidos'
    },
    component: () => import('@/views/OrderList.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
