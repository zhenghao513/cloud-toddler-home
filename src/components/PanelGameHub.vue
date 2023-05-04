<template>
  <AppPanel :items="items" />
</template>

<script setup lang="ts">
  import type { ItemProps } from '@/components/AppPanel.vue';

  const items = ref<ItemProps[]>([
    {
      icon: '',
      title: '🎁 待开发',
      to: '',
    },
  ]);
</script>

<style scoped></style>
