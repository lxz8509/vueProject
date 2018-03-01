import Vue from 'vue';
import vueRouter from './router/index.js'//导入路由配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './component/App.vue'
import 'normalize.css'
import './less/index.less'
import axios from 'axios';
import api, { domain } from './js/api.js' 
axios.defaults.baseURL = domain;
axios.defaults.withCredentials=true;
Vue.prototype.$http = axios;
Vue.prototype.$api = api;
Vue.use(ElementUI);
new Vue({
    el:'#app',
    router:vueRouter,
    render:a=>a(App),
})