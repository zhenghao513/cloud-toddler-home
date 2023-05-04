<template>
  <AppPanel :items="items" />
</template>

<script setup lang="ts">
  import type { ItemProps } from '@/components/AppPanel.vue';

  const items = ref<ItemProps[]>([
    { icon: '/invite.png', title: '新幼儿报名', to: '' },
    { icon: '/document.png', title: '原幼儿报名', to: '' },
    { icon: '/pay.png', title: '线上缴费', to: '' },
  ]);
</script>

<style scoped></style>
