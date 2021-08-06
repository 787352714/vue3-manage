/*
 * @Author: your name
 * @Date: 2021-08-03 15:55:58
 * @LastEditTime: 2021-08-06 15:09:36
 * @LastEditors: Please set LastEditors
 * @Description: 工具函数
 * @FilePath: /personal/vue-my-admin/src/utils/index.js
 */
import setting from 'setting'

export const deepClone = function(obj){
    if(obj === null) return null;
    if(obj instanceof RegExp) return new RegExp(obj);
    if(obj instanceof Date) return new Date(obj);
    if(typeof obj !== 'object') return obj;
    let res = Array.isArray(obj) ?[]:{}
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            res[key] = deepClone(element)
        }
    }
    return res
}

export const setStorages = function(key,value){
    window.localStorage.setItem(setting.appPrefix+key,value)
}

export const getStorages = function(key){
    return window.localStorage.getItem(setting.appPrefix+key)
}

export const removeStorages = function(key){
    window.localStorage.removeItem(setting.appPrefix+key)
}