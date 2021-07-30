/*
 * @Author: zj
 * @Date: 2021-07-30 10:21:28
 * @LastEditTime: 2021-07-30 10:37:36
 * @LastEditors: Please set LastEditors
 * @Description: gurde
 * @FilePath: /personal/vue-my-admin/src/router/permission.js
 */
import nProgress from "nprogress";
import router from './index'
import { useStore } from "vuex";
import { IS_LOGIN } from "../store/moudles/baseStore/stateTypes";

const store = useStore();
const isLogin = store.baseStore.state[IS_LOGIN];

router.beforeEach((to,from,next)=>{
    nProgress.start()
    console.log(to,from)
    if (to.name !== 'Login' && !isLogin) next({ name: 'Login' })
    else next()
})

router.afterEach((to, from) => {
    nProgress.end()
    console.log(to,from)
})