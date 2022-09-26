import { createApp } from 'vue';
import router from './router';
import './assets/css/tailwind.css';
import './assets/css/fonts.css';
import './assets/css/transitions.css';
import App from './App.vue';

createApp(App).use(router).mount('#app');
