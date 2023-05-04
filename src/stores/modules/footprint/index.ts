import { defineStore } from 'pinia';

const useFootprintStore = defineStore('footprint', () => {
  const footprint = ref<string[]>([]);
  const save = (value: string): void => {
    footprint.value.push(value);
  };

  return { footprint, save };
});

export default useFootprintStore;
