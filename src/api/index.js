/*
 * @Author: zj
 * @Date: 2021-07-29 16:33:36
 * @LastEditTime: 2021-08-02 17:27:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /personal/vue-my-admin/src/api/instance.js
 */

import { ElMessage } from "element-plus";
import nProgress from "nprogress";
import axios from "axios";

const baseURL = process.env.VUE_APP_BASE_URL;
const timeout = 2000;
const baseHeader = {
    "Content-Type": "application/json"
};
const instance = axios.create({
    baseURL,
    timeout,
    baseHeader,
})
//interceptors 拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    nProgress.start()
    return config;
}, function (error) {
    // 对请求错误做些什么
    nProgress.done()
    ElMessage.warning(
        {
            message: '请求失败，请稍后再试',
            type: 'warning' 
        }
    )
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    nProgress.done()
    const { code, msg,desc } = response.data
    if (code != 200) {
      ElMessage({
        message: msg||desc,
        type: "error",
        duration: 1000
      });
      return Promise.reject(response.data);
    }
    return response.data.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    ElMessage({
        message: "服务器开小差啦~",
        type: "error",
        duration: 1000
      });
    return Promise.reject(error);
  });
export default instance;