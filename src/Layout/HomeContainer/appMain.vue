<!--
 * @Author: zj
 * @Date: 2021-07-29 14:17:31
 * @LastEditTime: 2021-08-06 14:58:43
 * @LastEditors: Please set LastEditors
 * @Description: appMain
 * @FilePath: /personal/vue-my-admin/src/Layout/HomeContainer/appMain.vue
-->
<template>
  <section class="app-main">
        <router-view v-slot="{ Component }" :include="cachedViews">
            <transition
                name="fade-transform"
                mode="out-in"
            >
                <keep-alive :key="key">
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
  </section>
</template>

<script>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router'
export default {
    name:'appMain',
    setup(){
        const store = useStore()
        const route = useRoute()
        const cachedViews = () => {
        return store.state.baseStore.cachedViews
        }
        const key = () => {
            return route.path
        }
        return {
            cachedViews,
            key
        }
    }
}
</script>

<style lang="scss" scoped>
    .app-main{
        height: calc(100% - 66px);
        width: 100%;
        position: relative;
        overflow: hidden;
    }
</style>