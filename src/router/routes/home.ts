import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/photo',
    name: 'photo',
    component: () => import('@/views/PhotoView.vue'),
    meta: { title: '精彩瞬间' },
  },
  {
    path: '/handbook',
    name: 'handbook',
    component: () => import('@/views/HandbookView.vue'),
    meta: { title: '成长手册' },
  },
  {
    path: '/sign-in',
    name: 'signIn',
    component: () => import('@/views/SignInView.vue'),
    meta: { title: '签到' },
  },
  {
    path: '/suggestion',
    name: 'suggestion',
    component: () => import('@/views/SuggestionView.vue'),
    meta: { title: '建议箱' },
  },
  {
    path: '/garden-visit',
    name: 'gardenVisit',
    component: () => import('@/views/GardenVisitView.vue'),
    meta: { title: '园所参观' },
  },
  {
    path: '/indoor',
    name: 'indoor',
    component: () => import('@/views/IndoorView.vue'),
    meta: { title: '室内环境' },
  },
  {
    path: '/outdoor',
    name: 'outdoor',
    component: () => import('@/views/OutdoorView.vue'),
    meta: { title: '室外环境' },
  },
  {
    path: '/registry-apply',
    name: 'registryApply',
    component: () => import('@/views/RegistryApplyView.vue'),
    meta: { title: '报名申请' },
  },
  {
    path: '/game-hub',
    name: 'gameHub',
    component: () => import('@/views/GameHubView.vue'),
    meta: { title: '游戏中心' },
  },
  {
    path: '/canteen-menu',
    name: 'canteenMenu',
    component: () => import('@/views/CanteenMenuView.vue'),
    meta: { title: '今天吃什么' },
  },
  {
    path: '/canteen-menu/:id',
    name: 'canteenMenuDetail',
    component: () => import('@/views/CanteenMenuDetailView.vue'),
    meta: { title: '食谱' },
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/MapView.vue'),
    meta: { title: '地图' },
  },
  {
    path: '/care',
    name: 'care',
    component: () => import('@/views/CareView.vue'),
    meta: { title: '服务' },
  },
  {
    path: '/leave',
    name: 'leave',
    component: () => import('@/views/LeaveView.vue'),

    meta: { title: '日常请假' },
  },
  {
    path: '/substitution',
    name: 'substitution',
    component: () => import('@/views/SubstitutionView.vue'),
    meta: { title: '代接申请' },
  },
];

export default routes;
