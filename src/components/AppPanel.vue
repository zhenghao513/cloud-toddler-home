<template>
  <div class="vertical-container">
    <div
      v-for="item in items"
      :key="item.title"
      class="media"
      @click="$router.push(item.to)"
    >
      <img
        class="media-image"
        :src="item.icon"
        width="40"
        alt=""
      />
      <div class="media-body">
        <h6>{{ item.title }}</h6>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  export interface ItemProps {
    title: string;
    icon: string;
    to: string;
  }

  const props = defineProps<{
    items: ItemProps[];
  }>();
</script>

<style scoped>
  .vertical-container {
    padding: 0 0.32em;
  }

  .vertical-container * + * {
    margin-top: 0.64em;
  }

  .media {
    padding: 0.3em;
    background-color: #eee;
    border-radius: 0.4em;
  }

  .media-image {
    float: left;
    margin-right: 0.3em;
  }

  .media-body {
    overflow: auto;
    margin-top: 0;
  }

  .media-body h6 {
    margin-top: 0;
    font-size: 0.4em;
  }
</style>
