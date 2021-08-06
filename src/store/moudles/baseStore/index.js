/*
 * @Author: zj
 * @Date: 2021-07-27 20:30:38
 * @LastEditTime: 2021-08-06 15:13:40
 * @LastEditors: Please set LastEditors
 * @Description: baseStore
 */
import { MENU_LIST,USER_ROLE,CACHE_VIEWS,IS_LOGIN,USER_INFO } from './stateTypes';
import setting from '../../../adminSetting';
import { getToken } from 'api/login';
import { setStorages,getStorages } from '../../../utils';
import router from '@/router/index';
const role = getStorages('role')?JSON.parse(getStorages('role')):[]
const userInfo = getStorages('userInfo')?JSON.parse(getStorages('userInfo')):{}
export const baseStore = {
    state:()=>({
        [MENU_LIST]:[...setting.menuList],
        [USER_ROLE]:role,
        [CACHE_VIEWS]:[...setting.cacheViews],
        [IS_LOGIN]:false,
        [USER_INFO]:userInfo
    }),
    mutations: { 
        setMenuList:(state,value)=>{
            state[MENU_LIST] = value
        },
        setUserRole:(state,value)=>{
            state[USER_ROLE] = value
        },
        setCacheViews:(state,value)=>{
            state[CACHE_VIEWS] = value
        },
        setLoginStatus:(state,value)=>{
            state[IS_LOGIN] = value
        },
        setUserInfo:(state,value)=>{
            state[USER_INFO] = value
        }
    },
    actions: { 
        getToken:({commit},body)=>{
            getToken(body).then(res=>{
                const userInfo = res.userInfo;
                const userRole = res.userRole;
                if(!userInfo||!userInfo.token){
                    router.push({name:'401'})
                    return
                }
                if(userRole&&userRole.length){
                    commit("setUserInfo",userInfo);
                    commit("setUserRole",userRole);
                    commit("setLoginStatus",true);
                    setStorages('userInfo',JSON.stringify(userInfo));
                    setStorages('token',userInfo.token);
                    setStorages('role',JSON.stringify(userRole));
                    router.push({name:'Home'})
                }else{
                    router.push({name:'401'})
                    return
                }
            })
        }
    },
}

export default baseStore