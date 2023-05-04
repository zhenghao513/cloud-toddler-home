<template>
  <AppGrid :grid-items="items" />
</template>

<script setup lang="ts">
  import { GridItemProps } from './AppGrid.vue';

  const items = ref<GridItemProps[]>([
    {
      text: '精彩瞬间',
      icon: '/wonderful-moments.png',
      to: '/photo',
    },
    {
      text: '成长手册',
      icon: '/growth-manual.png',
      to: '/handbook',
    },
    {
      text: '签到',
      icon: '/sign-in.png',
      to: '/sign-in',
    },
    {
      text: '建议箱',
      icon: '/suggestion-box.png',
      to: '/suggestion',
    },
    {
      text: '园所参观',
      icon: '/visit.png',
      to: '/garden-visit',
    },
    {
      text: '报名申请',
      icon: '/apply.png',
      to: '/registry-apply',
    },
    {
      text: '今天吃什么',
      icon: '/shop.png',
      to: '/canteen-menu',
    },
    {
      text: '游戏中心',
      icon: '/gift.png',
      to: '/game-hub',
    },
  ]);
</script>

<style scoped></style>
