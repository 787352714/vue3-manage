/*
 * @Author: your name
 * @Date: 2021-07-27 14:47:36
 * @LastEditTime: 2021-07-27 21:36:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /personal/vue-my-admin/src/store/index.js
 */
import { createStore } from 'vuex'
import baseStore from './moudles/baseStore'

const store = createStore({
  modules:{
    baseStore:baseStore
  }
})

export default store