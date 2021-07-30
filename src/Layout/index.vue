<!--
 * @Author: your name
 * @Date: 2021-07-29 14:41:04
 * @LastEditTime: 2021-07-29 14:57:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /personal/vue-my-admin/src/Layout/index.vue
-->
<template>
    <div class="app-wrap">
        <top-bar></top-bar>
        <app-main></app-main>
    </div>
</template>

<script>
import TopBar from './TopBar/index.vue';
import appMain from './HomeContainer/appMain.vue'
export default {
    components:{
        TopBar,
        appMain
    }
}
</script>
<style lang="scss" scoped>
    .app-wrap{
        height: 100%;
        width: 100%;
    }
</style>