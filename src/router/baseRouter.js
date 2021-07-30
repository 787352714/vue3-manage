/*
 * @Author: zj
 * @Date: 2021-07-30 14:30:44
 * @LastEditTime: 2021-07-30 14:37:22
 * @LastEditors: Please set LastEditors
 * @Description: login
 * @FilePath: /personal/vue-my-admin/src/router/baseRouter.js
 */
import Login from '@/views/Login/index.vue'
const baseRouter = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    }
]
export default baseRouter