import Vue from 'vue';
import App from './component/App.vue'
import vueRouter from './router/index.js'

new Vue({
    el:'#app',
    router:vueRouter,
    render:a=>a(App),
})