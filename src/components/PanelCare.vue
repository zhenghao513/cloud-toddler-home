<template>
  <AppPanel :items="items" />
</template>

<script setup lang="ts">
  const items = ref([
    {
      icon: '/leave.png',
      title: '日常请假',
      to: '/leave',
    },
    {
      icon: '/apply.png',
      title: '代接申请',
      to: '/substitution',
    },
    {
      icon: '/suggestion-box.png',
      title: '我要建议',
      to: '/suggestion',
    },
  ]);
</script>

<style scoped></style>
