import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  linkActiveClass: 'active-link',
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/archive',
      name: 'Archive',
      component: () => import('../views/archive.vue')
    },
    {
      path: '/highlights',
      name: 'Highlights',
      component: () => import('../views/highlights.vue')
    },
    {
      path: '/narratives',
      name: 'Narratives',
      component: () => import('../views/narratives.vue')
    },
    {
      path: '/history',
      name: 'History',
      component: () => import('../views/history.vue')
    }
  ]
})

export default router
