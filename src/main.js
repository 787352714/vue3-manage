/*
 * @Author: your name
 * @Date: 2021-07-27 14:47:36
 * @LastEditTime: 2021-08-04 14:46:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /personal/vue-my-admin/src/main.js
 */
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/style/index.scss'
import router from './router';
import './router/permission';

const app = createApp(App)
console.log(`-----------------------目前是${process.env.NODE_ENV}环境-----------------------`)
console.log(`-----------------------The environment is ${process.env.NODE_ENV}-----------------------`)
// plugin
app.use(store).use(router).use(ElementPlus);

// mount
app.mount('#app')


