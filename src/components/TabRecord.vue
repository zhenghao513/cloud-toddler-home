<template>
  <van-tabs v-model:active="active">
    <van-tab
      v-for="(tab, index) in tabs"
      :key="index"
      :title="tab.title"
    >
      <component :is="ListRecord" />
    </van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
  import useRecordStore from '@/stores/modules/record';
  import ListRecord from './ListRecord.vue';

  const active = ref(0);
  const recordStore = useRecordStore();
  watch(
    () => active.value,
    (newValue, oldValue) => {
      recordStore.record = newValue;
    },
  );

  const tabs = ref([{ title: '请假' }, { title: '代接' }, { title: '建议' }]);
</script>

<style scoped></style>
