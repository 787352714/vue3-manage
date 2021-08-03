/*
 * @Author: zj
 * @Date: 2021-07-27 20:30:38
 * @LastEditTime: 2021-08-03 16:33:38
 * @LastEditors: Please set LastEditors
 * @Description: baseStore
 */
import { MENU_LIST,USER_ROLE,CACHE_VIEWS,IS_LOGIN,USER_INFO } from './stateTypes';
import setting from '../../../adminSetting';
import { getToken } from 'api/login';
import { setStorages } from '../../../utils';
import { useRouter } from 'vue-router';

export const baseStore = {
    state:()=>({
        [MENU_LIST]:[...setting.menuList],
        [USER_ROLE]:[...setting.userRole],
        [CACHE_VIEWS]:[...setting.cacheViews],
        [IS_LOGIN]:true
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
            state[IS_LOGIN] = false
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
                const router = useRouter()
                if(!userInfo||!userInfo.token){
                    router.push({name:'401'})
                    return
                }
                if(userRole&&userRole.length){
                    commit(setUserInfo,userInfo);
                    commit(setUserRole,userRole);
                    commit(setLoginStatus,true);
                    setStorages('userInfo',userInfo);
                    setStorages('token',userInfo.token);
                    setStorages('userInfo',userRole);
                    router.push({name:'Home'})
                }else{
                    router.push({name:'401'})
                    return
                }
                console.log(res)
            })
        }
    },
}

export default baseStore