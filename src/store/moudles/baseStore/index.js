/*
 * @Author: zj
 * @Date: 2021-07-27 20:30:38
 * @LastEditTime: 2021-07-30 10:36:33
 * @LastEditors: Please set LastEditors
 * @Description: baseStore
 */
import { MENU_LIST,USER_ROLE,CACHE_VIEWS,IS_LOGIN } from './stateTypes'
import setting from '../../../adminSetting'

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
            state[IS_LOGIN] = value
        },
    },
    actions: { 

    },
}

export default baseStore