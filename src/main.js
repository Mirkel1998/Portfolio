import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flowbite';
import 'vueperslides/dist/vueperslides.css';

const app = createApp(App)

app.use(router)

app.mount('#app')
