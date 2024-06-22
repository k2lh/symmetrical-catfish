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
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('../views/portfolio.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/projects.vue')
    },
    {
      path: '/narratives',
      name: 'Narratives',
      component: () => import('../views/narratives.vue')
    },
    {
      path: '/experience',
      name: 'Experience',
      component: () => import('../views/experience.vue')
    },
    {
      path: '/testimonials',
      name: 'Testimonials',
      component: () => import('../views/testimonials.vue')
    }
  ]
})

export default router
