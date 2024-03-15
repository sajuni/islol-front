import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import http from '@/http';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  function test() {
    http
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log('dd: ' + res);
      })
      .catch((e) => {
        console.log('err: ' + e);
      });
  }
  return { count, doubleCount, increment, test };
});
