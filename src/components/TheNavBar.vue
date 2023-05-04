<template>
  <van-nav-bar
    :title="String($route.meta.title).replace('undefined', '')"
    safe-area-inset-top
    :left-arrow="show"
    @click-left="onClickLeft"
  />
</template>

<script setup lang="ts">
  const show = ref(false);
  const route = useRoute();
  const router = useRouter();

  watch(
    () => route.name,
    (name) => {
      show.value = !['login', 'home', 'dynamic', 'user'].includes(String(name));
    },
  );

  const onClickLeft = () => {
    router.back();
  };
</script>

<style scoped>
  .van-nav-bar {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
  }
</style>
