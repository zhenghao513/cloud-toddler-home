<template>
  <AppGrid :grid-items="items" />
</template>

<script setup lang="ts">
  import { GridItemProps } from './AppGrid.vue';

  const items = ref<GridItemProps[]>([
    {
      text: '办事记录',
      icon: '/record.png',
      to: '/record',
    },
    {
      text: '数据统计',
      icon: '/data-dashboard.png',
      to: '/data-dashboard',
    },
    {
      text: '我的足迹',
      icon: '/footprints.png',
      to: '/footprints',
    },
    {
      text: '通讯录',
      icon: '/address-book.png',
      to: '/address-book',
    },
  ]);
</script>

<style scoped></style>
