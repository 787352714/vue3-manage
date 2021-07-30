<!--
 * @Author: zj
 * @Date: 2021-07-27 19:29:13
 * @LastEditTime: 2021-07-29 14:13:41
 * @LastEditors: Please set LastEditors
 * @Description: topMenu
-->
<template lang="">
    <div class="top-menu">
        <el-menu :default-active="activeIndex" v-if="activeIndex" class="el-menu-demo" mode="horizontal">
            <template v-for="item in menuList" >
                <!-- <el-menu-item v-if="(!item.children)&&hasPermision(item.role)" :key="item.id" :index="item.id">{{item.name}}</el-menu-item> -->
                <SubMenu :menuList="menuList" :key="item.id" v-if="item.children&&hasPermision(item.role)"></SubMenu>
            </template>
        </el-menu>
    </div>
</template>
<script>
import SubMenu from './subMenu.vue'
import { useStore } from 'vuex'
import { MENU_LIST,USER_ROLE } from '@/store/moudles/baseStore/stateTypes'
import { computed } from 'vue'
export default {
    components:{
       SubMenu 
    },
    setup(_,context) {
        const store = useStore();
        const userRole = computed(()=>store.state.baseStore[USER_ROLE]);
        const menuList = computed(()=>store.state.baseStore[MENU_LIST]);
        const hasPermision = menuRole=>userRole.value.some(item=>{
            return menuRole.includes(item)
        })
        const activeIndex = computed(()=>{
            const index = menuList.value.find(item=>item.role.some(ele=>userRole.value.includes(ele)))
            return index.id
        })
        return {
            userRole,
            menuList,
            hasPermision,
            activeIndex
        }
    }
}
</script>
<style lang="scss">
    .top-menu{
        height: 100%;
        width: 100%;
        .el-menu{
            height: 100%;
        }
    }
</style>