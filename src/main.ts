import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
// import 'amfe-flexible';
import pinia from './stores';
import './api';

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
