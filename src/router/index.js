/*
 * @Author: your name
 * @Date: 2021-07-27 14:47:36
 * @LastEditTime: 2021-08-06 15:16:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /personal/vue-my-admin/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/Layout/index.vue';
import baseRouter from './baseRouter';

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect:'/home',
    children:[
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: '/home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue'),
      },
    ]
  },
  ...baseRouter
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
