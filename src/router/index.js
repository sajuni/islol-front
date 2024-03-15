import { createRouter, createWebHistory } from 'vue-router';
import login from '@/router/auth/login';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...login,
    {
      path: '/error/404',
      name: '404',
      component: () => import('@/views/error/404View.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/error/404'
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
});

export default router;
