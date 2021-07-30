/*
 * @Author: zj
 * @Date: 2021-07-29 16:03:24
 * @LastEditTime: 2021-07-29 18:25:49
 * @LastEditors: Please set LastEditors
 * @Description: axios
 * @FilePath: /personal/vue-my-admin/src/api/index.js
 */
import instance  from "./index";
import { message } from "element-plus";
import nProgress from "nprogress";

instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    NProgress.start()
    return config;
}, function (error) {
    // 对请求错误做些什么
    nProgress.done()
    message.warning(
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
    const { code, msg } = response.data;
    if (code != 200) {
      Message({
        message: msg,
        type: "error",
        duration: 1000
      });
      return Promise.reject();
    }
    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    Message({
        message: "服务器开小差啦~",
        type: "error",
        duration: 1000
      });
    return Promise.reject(error);
  });