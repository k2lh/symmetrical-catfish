import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
// import store from "./store";
import VueScrollTo from 'vue-scrollto';

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(VueScrollTo)
app.mount('#app')
