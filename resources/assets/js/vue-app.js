import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './routes';

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue'

Vue.use(VueRouter);
Vue.use (VueAxios, axios);

axios.defaults.baseURL = 'http://metrotech.gg/api';

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    render: h => h(App),
    el: '#vue-app',
    router
});
