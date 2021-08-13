<!--
 * @Author: your name
 * @Date: 2021-08-13 16:50:36
 * @LastEditTime: 2021-08-13 17:26:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /personal/vue-my-admin/src/components/charts/barExample.vue
-->
<template>
    <div id="barExample"></div>
</template>
<script>
import * as echarts from 'echarts';
import { onMounted } from "vue";
import { barExampleOption } from './options'
export default {
    setup() {
        const setCharts = ()=>{
            const id = document.getElementById("barExample")
            const instance = echarts.init(id);
            instance.setOption(barExampleOption)
        }
        onMounted(setCharts)
    },
}
</script>
<style lang="scss" scoped>
    #barExample{
        height:350px;
    }
</style>