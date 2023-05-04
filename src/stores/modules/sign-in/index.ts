import { defineStore } from 'pinia';
import { ref } from 'vue';

const useSignInStore = defineStore('SignIn', () => {
  const status = ref(false);
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { status, count, increment };
});

export default useSignInStore;
