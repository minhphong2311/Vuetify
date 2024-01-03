// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Default from '../layouts/default/Default.vue'
import Sub from '../layouts/default/Sub.vue'
import Login from '../views/Login.vue'
import Home from '../views/home.vue'
import Menu01 from '../views/Menu01.vue'
import Menu02 from '../views/Menu02.vue'
import Menu03 from '../views/Menu03.vue'

const routes = [
  {
    path: '/',
    component: () => Default,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      }
    ],
  },
  {
    path: '/menu01',
    component: () => Sub,
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
    component: () => Sub,
    children: [
      {
        path: '',
        name: 'Menu02',
        component: () => Menu02,
      },
    ],
  },
  {
    path: '/menu03',
    component: () => Sub,
    children: [
      {
        path: '',
        name: 'Menu03',
        component: () => Menu03,
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
