/*
 * @Author: zj
 * @Date: 2021-07-30 14:30:44
 * @LastEditTime: 2021-08-06 15:16:12
 * @LastEditors: Please set LastEditors
 * @Description: login
 * @FilePath: /personal/vue-my-admin/src/router/baseRouter.js
 */
import Login from '@/views/Login/index.vue';
import E401 from '@/views/error/401.vue';
import E404 from '@/views/error/404.vue';

const baseRouter = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/401',
        name: '401',
        component: E401,
    },
    {
        path: '/404',
        name: '404',
        component: E404,
    }
]
export default baseRouter