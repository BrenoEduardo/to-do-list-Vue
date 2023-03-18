import { createRouter, createWebHistory } from 'vue-router'
import ladingPage from '../views/ladingPage.vue';
import sobreNos from '../views/sobreNos.vue';
import contatenos from'../views/contateNos.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ladingPage',
      component: ladingPage
    },
    {
      path: '/sobreNos',
      name: 'sobreNos',
      component: sobreNos
    },
    {
      path: '/contatenos',
      name: 'contatenos',
      component: contatenos
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
