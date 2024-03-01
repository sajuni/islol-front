import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('login', () => {
  const accessToken = ref(localStorage.getItem('accessToken'));
  const refreshToken = ref(localStorage.getItem('refreshToken'));

  return { accessToken, refreshToken };
});
