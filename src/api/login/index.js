/*
 * @Author: your name
 * @Date: 2021-08-02 15:10:18
 * @LastEditTime: 2021-08-02 17:25:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /personal/vue-my-admin/src/api/login/index.js
 */
import instance from '../index.js';

export const getToken =body => instance.post('api/token',body);