import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/experience',
      name: 'Experience',
      component: () => import('../views/experience.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/projects.vue')
    },
    {
      path: '/testimonials',
      name: 'Testimonials',
      component: () => import('../views/testimonials.vue')
    }
  ]
})

export default router
