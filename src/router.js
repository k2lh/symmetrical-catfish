import { createRouter, createWebHistory } from 'vue-router'

if (window.location.href.includes('local')) {
  window.document.title = 'DEV: klh';
}
if (window.location.href.includes('app-ionos')) {
  window.document.title = 'STG: klh';
}

const router = createRouter({
  linkActiveClass: 'active-link',
  history: createWebHistory(),
  historyApiFallback: true,
  routes: [
    { path: '/', name: 'Home', component: () => import('./views/home.vue'), alias:'/home' },
    { path: '/archive', name: 'Archive', component: () => import('./views/archive.vue') },
    { path: '/highlights', name: 'Highlights', component: () => import('./views/highlights.vue') },
    { path: '/narratives', name: 'Narratives', component: () => import('./views/narratives.vue') },
    { path: '/history', name: 'History', component: () => import('./views/history.vue') },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component:() => import('./views/home.vue') }
  ],
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router
