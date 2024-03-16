export default [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue')
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: () => import('@/views/auth/SignInView.vue')
  }
];
