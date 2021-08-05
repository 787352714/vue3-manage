/*
 * @Author: your name
 * @Date: 2021-08-02 15:10:18
 * @LastEditTime: 2021-08-05 16:14:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /personal/vue-my-admin/src/api/login/index.js
 */
import axios from 'axios';
import instance from '../index.js';

export const getToken =body => instance.post('api/token',body);

// get bind
export const getWallPaper = ()=>axios.get('bing')