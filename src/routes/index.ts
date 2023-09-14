import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import CustomerScreen from '@/views/CustomerScreen.vue'
import ProductsScreen from '@/views/ProductsScreen.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/customers',
  },
  {
    path: '/customers',
    name: 'Customers',
    component: CustomerScreen,
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsScreen,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
