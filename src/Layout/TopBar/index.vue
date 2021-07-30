<!--
 * @Author: zj
 * @Date: 2021-07-27 15:14:05
 * @LastEditTime: 2021-07-29 14:17:14
 * @LastEditors: Please set LastEditors
 * @Description: 头部导航栏
 * @FilePath: /personal/vue-my-admin/src/components/Layout/TopBar/index.vue
-->
<template>
    <div class="top-bar">
        <div class="top-bar-logo">
            <Logo></Logo>
        </div>
        <div class="top-bar-menu">
            <TopMenu></TopMenu>
        </div>
        <div class="top-bar-hamburger">
            <Setting></Setting>
        </div>
        <div class="top-bar-avatar">
            <Avatar></Avatar>
        </div>
    </div>
</template>
<script>
import Logo from './Logo.vue';
import Avatar from './Avatar.vue';
import Setting from './hamburger/setting.vue';
import TopMenu from './topMenu/index.vue'

export default {
    components:{
        Logo,
        Avatar,
        Setting,
        TopMenu
    }
}
</script>
<style lang="scss">
    .top-bar{
        width: 100%;
        height: 66px;
        position: relative;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
        display: flex;
        align-content: center;
        &-logo{
           float: left;
        }
        &-menu{
            width: calc(100% - 200px);
            height: 66px;
        }
        &-avatar{
            position: absolute;
            right: 10px;
            top: 10px;
        }
        &-hamburger{
            height: 100%;
            width: 100px;
        }
    }
</style>