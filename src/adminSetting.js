/*
 * @Author: zj
 * @Date: 2021-07-27 16:40:38
 * @LastEditTime: 2021-08-04 16:10:45
 * @LastEditors: Please set LastEditors
 * @Description: setting
 */

const setting = {
    appPrefix: 'manage-',
    siteLogo:'https://avatars.githubusercontent.com/u/6128107?s=200&v=4', // 页面logo
    userRole:['admin'],//测试数据
    menuList:[
        {
            id:"1",
            name:'首页',
            path:'/home',
            role:['admin']
        },
        {
            id:"5",
            name:'首页test',
            path:'/test',
            role:['admin','user'],
            children:[
                {
                    id:"2",
                    name:'首页test',
                    path:'',
                    role:['admin','user'],
                    children:[{
                        id:"3",
                        name:'首页test2',
                        path:'/about',
                        role:['admin','user']
                    }],
                },
                {
                    id:"4",
                    name:'首页test4',
                    path:'/test',
                    role:['admin']
                }
            ]
        },
    ],//测试数据
    cacheViews:[],
    whitelist:["Login","401","404"]
}

export default setting