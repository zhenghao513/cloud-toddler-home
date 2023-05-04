<template>
  <van-list>
    <van-cell
      v-for="(item, index) in list"
      :key="index"
      :value="value(item)"
    >
      <template #title>
        <span class="custom-title">{{ title(item) }}</span>
        <van-tag
          v-if="recordStore.record === 0"
          :type="(item as LeaveType).state ? 'primary' : 'warning'"
        >
          {{ tag(item) }}
        </van-tag>
      </template>
    </van-cell>
  </van-list>
</template>

<script setup lang="ts">
  import { useRecordStore, useFormStore } from '@/stores';
  import type { LeaveType, SubstitutionType, SuggestionType } from '@/stores/modules/form/types';

  const recordStore = useRecordStore();
  const formStore = useFormStore();
  const list = computed<LeaveType[] | SubstitutionType[] | SuggestionType[]>(() => {
    switch (recordStore.record) {
      case 0:
        return formStore.leave;
      case 1:
        return formStore.substitution;
      case 2:
        return formStore.suggestion;
      default:
        return [];
    }
  });

  const title = (item: LeaveType | SubstitutionType | SuggestionType) => {
    switch (recordStore.record) {
      case 0:
        return (item as LeaveType).type;
      case 1:
        return (item as SubstitutionType).substitutionParent;
      case 2:
        return (item as SuggestionType).title;
      default:
        return undefined;
    }
  };

  const tag = (item: LeaveType | SubstitutionType | SuggestionType) => {
    if (recordStore.record === 0) {
      return (item as LeaveType).state ? '已通过' : '待审核';
    }
  };

  const value = (item: LeaveType | SubstitutionType | SuggestionType) => {
    switch (recordStore.record) {
      case 0:
        return (item as LeaveType).calendar;
      case 1:
        return (item as SubstitutionType).phone;
      case 2:
        return (item as SuggestionType).isPublic ? '公开' : '匿名';
      default:
        return undefined;
    }
  };
</script>

<style scoped>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }
</style>
