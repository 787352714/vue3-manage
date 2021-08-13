<!--
 * @Author: your name
 * @Date: 2021-07-29 19:00:59
 * @LastEditTime: 2021-08-13 18:06:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /personal/vue-my-admin/src/views/home/index.vue
-->
<template>
    <div class="home">
        <el-row>
            <el-col :span="8">
                <div class="home_bar">
                    <BarExample />
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import BarExample from '@/components/charts/barExample.vue';
export default {
    components:{
        BarExample
    },
    setup() {
        
    },
}
</script>
<style lang="scss" scoped>
    .home{
        height: 100%;
        width: 100%;
        background:#c3d7df;
        padding:10px;
        &_bar{
            width: 100%;
            padding:20px;
            border-radius:15px;
            background:#ffffff;
        }
    }
</style>