<!--
 * @Author: zj
 * @Date: 2021-07-27 15:23:06
 * @LastEditTime: 2021-07-27 17:08:12
 * @LastEditors: Please set LastEditors
 * @Description: logo
 * @FilePath: /personal/vue-my-admin/src/components/Layout/TopBar/Logo.vue
-->

<template>
    <div>
        <Icon :imageUrl="url" />
    </div>
</template>
<script>
import Icon from '@/components/IconWithSvgOrImage/index.vue'
import setting from '@/adminSetting.js'

export default {
    data() {
        this.url = setting.siteLogo
        return {
            
        }
    },
    components:{
        Icon
    }
}
</script>
<style lang="">
    
</style>