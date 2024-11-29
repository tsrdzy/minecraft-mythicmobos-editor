import { createApp } from 'vue'
import App from './App.vue'

//后台
import axios from 'axios';
import VueAxios from 'vue-axios';

//路由
import router from './router/index.js'

import store from './store/store.js'


axios.defaults.baseURL = 'http://127.0.0.1:3000/'


createApp(App).use(router).use(store).use(VueAxios, axios).mount('#app')
