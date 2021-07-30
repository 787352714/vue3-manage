/*
 * @Author: zj
 * @Date: 2021-07-29 16:33:36
 * @LastEditTime: 2021-07-29 18:26:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /personal/vue-my-admin/src/api/instance.js
 */

import axios from "axios";

const baseURL = process.env.BASE_URL;
const timeout = 2000;
const baseHeader = {
    "Content-Type": "application/json"
};
const instance = axios.create({
    baseURL,
    timeout,
    baseHeader,
})

export default request;