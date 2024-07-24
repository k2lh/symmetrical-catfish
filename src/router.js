import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('./views/home.vue'), alias:'/home' },
  { path: '/archive', name: 'Archive', component: () => import('./views/archive.vue'), alias:'/archive' },
  { path: '/highlights', name: 'Highlights', component: () => import('./views/highlights.vue'), alias:'/highlights' },
  { path: '/narratives', name: 'Narratives', component: () => import('./views/narratives.vue'), alias:'/narratives' },
  { path: '/history', name: 'History', component: () => import('./views/history.vue'), alias:'/history' },
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component:() => import('./views/404.vue') }
  { path: '/:pathMatch(.*)', name: 'Home', component: () => import('./views/home.vue') }
]

console.log('router touch');

if (window.location.href.includes('local')) {
  window.document.title = 'DEV: klh';
}
if (window.location.href.includes('app-ionos')) {
  window.document.title = 'STG: klh';
}

const router = createRouter({
  linkActiveClass: 'active-link',
  history: createWebHashHistory(),
  // mode: 'history',
  routes: routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router
