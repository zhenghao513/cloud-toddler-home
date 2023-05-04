<template>
  <div class="vertical-container">
    <van-space
      :size="16"
      direction="vertical"
      fill
    >
      <div class="image-container">
        <img
          :src="menu?.imageUrl"
          :alt="menu?.title"
        />
      </div>
      <van-cell-group inset>
        <van-cell
          title="安心码"
          :value="menu?.id"
        />
        <van-cell
          title="菜名"
          :value="menu?.title"
        />
        <van-cell
          title="原料"
          :label="menu?.description.slice(3, -1)"
        />
      </van-cell-group>
    </van-space>
  </div>
</template>

<script setup lang="ts">
  import type { CookbookRes } from '@/api/canteen-menu';

  const item = sessionStorage.getItem('cookbookItem');
  const menu = ref<CookbookRes>();
  if (item) {
    menu.value = JSON.parse(item);
  }
</script>

<style scoped>
  .image-container {
    text-align: center;
  }
</style>
