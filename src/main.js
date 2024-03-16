import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { loadFonts } from './plugins/webfontloader';
import { createPinia } from 'pinia';

// 전역 css
import '@/assets/css/main.css';

// vuetify 관련
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives
});

const pinia = createPinia();
loadFonts();

createApp(App).use(router).use(pinia).use(vuetify).mount('#app');
