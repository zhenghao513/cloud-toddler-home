<template>
  <div class="page-container">
    <slot></slot>
  </div>
  <van-back-top bottom="1.97em" />
</template>

<script setup lang="ts"></script>

<style scoped>
  .page-container {
    min-height: calc(100vh - 96px);
    padding-bottom: 0.6em;
  }
</style>
