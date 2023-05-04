<template>
  <PanelRegistryApply />
</template>

<script setup lang="ts">
  import { showNotify } from 'vant';
  import 'vant/es/notify/style';

  onMounted(() => {
    showNotify({ type: 'warning', message: '暂停服务' });
  });
</script>

<style scoped></style>
