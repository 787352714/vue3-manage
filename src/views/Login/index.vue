<!--
 * @Author: zj
 * @Date: 2021-07-30 14:24:29
 * @LastEditTime: 2021-08-05 18:08:35
 * @LastEditors: Please set LastEditors
 * @Description: login
-->
<template>
    <div class="login">
        <div class="login-wrap">
            <div class="login-title">登 陆</div>
            <div class="login-form">
                <el-input class="login-form-account" v-model="userAccount" placeholder="请输入" size="small" clearable></el-input>
                <el-input class="login-form-password" v-model="userPassword" placeholder="请输入" size="small" clearable></el-input>
                <el-button class="login-form-button" type="primary" size="small" @click="handleLogin">登 陆</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { getWallPaper } from '@/api/login/index'
export default {
    setup(){
        const userAccount = ref("");
        const userPassword = ref("");
        const store = useStore()
        const form = reactive({userAccount,userPassword});
        const handleLogin = ()=>{
            store.dispatch('getToken',form);
        }
        const getBgimage = ()=>{
            getWallPaper().then(res=>{
                console.log(res)
            })
        }
        onMounted(()=>{
            getBgimage()
        })
        return {
            userAccount,
            userPassword,
            handleLogin
        }
    }
}
</script>
<style lang="scss" scoped>
    .login {
        height:100%;
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items: center;
        background: url(http://api.dujin.org/bing/1920.php);
        &-wrap{
            padding: 10px 20px;
            width: 260px;
            height: 260px;
            border-radius: 5px;
            background: rgba(3,3,3,0.25);
            box-shadow: 1px 1px 50px #000;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items: center;
        }
        &-title{
            position: relative;
            margin-top: 0px;
            text-align: center;
            font-size: 40px;
            color: #ddd;
            text-shadow: 3px 3px 10px #000;
            display:inline-block;
            margin-bottom: 20px;
        }
        &-form{
            text-align:center;
            &-account{
                margin-bottom: 10px;
            }
            &-password{
                margin-bottom: 10px;
            }
            &-button{
                width:120px
            }
        }
    }
</style>