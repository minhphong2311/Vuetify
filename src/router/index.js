// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Default from '../layouts/default/Default.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Menu01 from '../views/Menu01.vue'
import Menu02 from '../views/Menu02.vue'

const routes = [
  {
    path: '/',
    component: () => Default,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
      }
    ],
  },
  {
    path: '/menu01',
    component: () => Default,
    children: [
      {
        path: '',
        name: 'Menu01',
        component: () => Menu01,
      },
    ],
  },
  {
    path: '/menu02',
    component: () => Default,
    children: [
      {
        path: '',
        name: 'Menu02',
        component: () => Menu02,
      },
    ],
  },
  {
    path: '/login',
    // component: () => Default,
    children: [
      {
        path: '',
        name: 'Login',
        component: () => Login,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
