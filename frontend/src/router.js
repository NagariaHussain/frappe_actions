import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/actions/:name',
    component: () => import("@/pages/ActionDetails.vue"),
    props: true
  }
]

let router = createRouter({
  history: createWebHistory('/frontend'),
  routes,
})

export default router
