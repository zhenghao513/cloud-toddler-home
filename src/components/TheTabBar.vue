<template>
  <van-tabbar v-model="active">
    <van-tabbar-item
      v-for="item in tabbarItems"
      :key="item.text"
      :name="item.name"
      :icon="item.icon"
      :to="item.to"
      safe-area-inset-top
    >
      {{ item.text }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
  interface CustomTabbarItemProps {
    name: number | string;
    icon: string;
    to: string | object;
    text: string;
  }

  const tabbarItems: CustomTabbarItemProps[] = [
    {
      name: 'home',
      icon: '/cloud-toddler-home/home.png',
      to: '/home',
      text: '首页',
    },
    {
      name: 'dynamic',
      icon: '/cloud-toddler-home/dynamic.png',
      to: '/dynamic',
      text: '动态',
    },
    {
      name: 'user',
      icon: '/cloud-toddler-home/me.png',
      to: '/user',
      text: '我',
    },
  ];

  const active = ref('home');

  watch(
    () => active.value,
    (value) => {
      sessionStorage.setItem('active', value);
    },
  );

  onBeforeMount(() => {
    const value = sessionStorage.getItem('active');
    if (value) {
      active.value = value;
    }
  });
</script>

<style scoped>
  .van-tabbar--fixed {
    position: sticky;
  }
</style>
