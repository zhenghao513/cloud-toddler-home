<template>
  <AppPanel :items="items" />
</template>

<script setup lang="ts">
  import type { ItemProps } from '@/components/AppPanel.vue';

  const items = ref<ItemProps[]>([
    { icon: '/invite.png', title: '室内环境', to: '/indoor' },
    { icon: '/document.png', title: '室外环境', to: '/outdoor' },
  ]);
</script>

<style scoped></style>
