/*
 * @Author: zj
 * @Date: 2021-07-30 10:21:28
 * @LastEditTime: 2021-08-05 14:56:03
 * @LastEditors: Please set LastEditors
 * @Description: gurde
 * @FilePath: /personal/vue-my-admin/src/router/permission.js
 */
import nProgress from "nprogress";
import router from './index'
import store  from "../store/index";
import { USER_INFO } from "../store/moudles/baseStore/stateTypes";
import setting from 'setting'
router.beforeEach((to,from,next)=>{
    nProgress.start()
    const userInfo = store.state.baseStore[USER_INFO]
    if(to.name===undefined)next({name:'404'})
    if(!setting.whitelist.includes(to.name)&&!Object.keys(userInfo).length){
        next({ name: 'Login',params: {redirect:from.path}})
    }else{
        next()
    }
})

router.afterEach((to, from) => {
    nProgress.done()
    console.log(to,from)
})