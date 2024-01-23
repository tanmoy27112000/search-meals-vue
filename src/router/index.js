import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/letter/:letter?',
    name: 'byLetter',
    component: () => import('../views/SearchByLetter.vue')
  },
  {
    path: '/ingredient/:searchTerm?',
    name: 'byIngredient',
    component: () => import('../views/SearchByIngredient.vue')
  },
  {
    path: '/name/:name?',
    name: 'byName',
    component: () => import('../views/SearchByName.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () => import('../views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});


export default router;