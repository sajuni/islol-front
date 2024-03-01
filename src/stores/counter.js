import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  function test() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log('Response:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return { count, doubleCount, increment, test };
});
