import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/record',
    name: 'record',
    component: () => import('@/views/ServiceRecordView.vue'),
    meta: { title: '办事记录' },
  },
  {
    path: '/data-dashboard',
    name: 'dataDashboard',
    component: () => import('@/views/DataDashboardView.vue'),
    meta: { title: '数据统计' },
  },
  {
    path: '/footprints',
    name: 'footprints',
    component: () => import('@/views/FootprintsView.vue'),
    meta: { title: '我的足迹' },
  },
  {
    path: '/address-book',
    name: 'address-book',
    component: () => import('@/views/AddressBookView.vue'),
    meta: { title: '通讯录' },
  },
];

export default routes;
