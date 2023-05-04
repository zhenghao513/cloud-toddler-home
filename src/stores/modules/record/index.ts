import { defineStore } from 'pinia';

const useRecordStore = defineStore('record', () => {
  const record = ref(0);

  return { record };
});

export default useRecordStore;
