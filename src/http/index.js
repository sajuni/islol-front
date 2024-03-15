import axios from 'axios';
import { useAuthStore } from '@/stores/modules/auth';

const http = {};
const instance = axios.create({
  timeout: 5000,
  baseURL: ''
});

instance.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    const accessToken = authStore.accessToken;

    // if (!accessToken) {
    //   window.location.href = '/';
    //   return config;
    // }

    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error)
);

http.get = (url, options) => {
  return new Promise((resolve, reject) => {
    instance
      .get(url, options)
      .then((res) => {
        if (res.code == 1 || res.status == 200) {
          resolve(res.data);
        } else {
          reject(res.msg);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });
};

http.post = (url, data, options) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, options)
      .then((res) => {
        if (res.code == 1 || res.status == 200) {
          resolve(res.data);
        } else {
          reject(res.msg);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });
};

export default http;
