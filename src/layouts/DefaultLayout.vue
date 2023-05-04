<template>
  <TheNavBar />
  <PageLayout>
    <slot></slot>
  </PageLayout>
  <transition name="van-slide-up">
    <TheTabBar v-show="show" />
  </transition>
</template>

<script setup lang="ts">
  import { useFootprintStore } from '@/stores';

  const show = ref(false);
  const route = useRoute();
  watch(
    () => route.name,
    (name) => {
      show.value = ['home', 'dynamic', 'user'].includes(String(name));
    },
  );

  const historyStore = useFootprintStore();
  watch(
    () => route.meta.title,
    () => {
      historyStore.save(
        JSON.stringify({
          route,
          time: new Date().toLocaleTimeString('zh-CN').slice(0, -3),
        }),
      );
    },
  );
</script>

<style scoped></style>
