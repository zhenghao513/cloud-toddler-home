<template>
  <van-swipe
    class="my-swipe"
    :autoplay="3000"
    indicator-color="white"
  >
    <van-swipe-item
      v-for="item in sloganItems"
      :key="item"
    >
      {{ item }}
    </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
  const props = defineProps<{
    sloganItems?: string[];
    photoItems?: string[];
  }>();
</script>

<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 7.5em;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
