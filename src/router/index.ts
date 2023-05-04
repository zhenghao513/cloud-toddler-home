import { createRouter, createWebHistory } from 'vue-router';
import home from './routes/home';
import user from './routes/user';
import { showNotify } from 'vant';
import 'vant/es/notify/style';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: { title: '登录' },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: '首页' },
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: () => import('@/views/DynamicView.vue'),
      meta: { title: '动态' },
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserView.vue'),
      meta: { title: '我' },
    },
    {
      path: '/',
      redirect: '/login',
    },
    ...home,
    ...user,
  ],
});

router.beforeEach(async (to) => {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
  if (!isAuthenticated && to.name !== 'login') {
    showNotify({ message: '你还没有登陆' });
    return { name: 'login' };
  }
});

export default router;
