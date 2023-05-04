<template>
  <HomeSearch />
  <HomeSwipe />
  <HomeGrid />
  <van-space
    :size="16"
    direction="vertical"
    fill
  >
    <HomeGridCard />
    <HomeCell>精彩瞬间</HomeCell>
    <HomeCell>成长手册</HomeCell>
  </van-space>
</template>

<script setup lang="ts"></script>

<style scoped></style>
