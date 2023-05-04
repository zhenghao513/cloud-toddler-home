<template>
  <van-grid
    :border="false"
    :column-num="column"
  >
    <van-grid-item
      v-for="item in gridItems"
      :key="item.text"
      :icon="item.icon"
      :text="item.text"
      :to="item.to"
    />
  </van-grid>
</template>

<script setup lang="ts">
  export interface GridItemProps {
    text: string;
    icon: string;
    to: string;
  }

  const props = defineProps<{
    gridItems: GridItemProps[];
  }>();

  const column = computed(() => {
    return Math.min(4, props.gridItems.length);
  });
</script>

<style scoped></style>
