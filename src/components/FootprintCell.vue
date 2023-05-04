<template>
  <van-cell-group>
    <van-cell
      v-for="(item, index) in list"
      :key="index"
      :title="item.route.meta.title"
      :value="item.time"
      clickable
      @click="$router.push(item.route.path)"
    />
  </van-cell-group>
  <span class="bottom-text">{{ list.length }}条记录</span>
</template>

<script setup lang="ts">
  import { useFootprintStore } from '@/stores';

  const footprintStore = useFootprintStore();

  const list = computed(() => {
    return footprintStore.footprint
      .map((item) => {
        const parseItem = JSON.parse(item);
        const { route } = parseItem;
        const { time } = parseItem;
        return { route, time };
      })
      .reverse();
  });
</script>

<style scoped>
  .bottom-text {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.43em;
    font-size: var(--van-cell-font-size);
    color: var(--van-cell-value-color);
  }
</style>
