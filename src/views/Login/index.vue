<!--
 * @Author: zj
 * @Date: 2021-07-30 14:24:29
 * @LastEditTime: 2021-07-30 15:35:49
 * @LastEditors: Please set LastEditors
 * @Description: login
-->
<template>
    <div class="login">
        <div class="login-title">登陆</div>
        <div class="login-form">
            <el-input v-model="userAccount" placeholder="请输入" size="small" clearable></el-input>
            <el-input v-model="userPassword" placeholder="请输入" size="small" clearable></el-input>
            <el-button type="primary" size="small" @click="handleLogin">登 陆</el-button>
        </div>
    </div>
</template>
<script>
import { reactive, ref } from 'vue'
export default {
    setup(){
        const userAccount = ref("");
        const userPassword = ref("");
        const form = reactive({userAccount,userPassword});
        const handleLogin = ()=>{
            console.log(form)
        }
        return {
            userAccount,
            userPassword,
            handleLogin
        }
    }
}
</script>