/*
 * @Author: your name
 * @Date: 2021-07-27 14:47:36
 * @LastEditTime: 2021-07-29 19:02:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /personal/vue-my-admin/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/Layout/index.vue';

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
