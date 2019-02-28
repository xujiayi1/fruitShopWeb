<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../../../src/assets/icon.png" alt="">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="name">姓名</label>
                            <input type="text" name="name" class="form-control" v-model="name">
                        </div>
                        <div class="form-group">
                            <label for="nickname">昵称<span :class="isRepeated ?'success':'warn'">该昵称已被占用</span></label>
                            <input type="text" name="nickname" class="form-control" v-model="nickname">
                        </div>
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" name="email" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" name="password" class="form-control" v-model="password">
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">确认密码</label>
                            <input type="password" name="comfirmPassword" class="form-control" v-model="confirmPassword">
                        </div>
                        <button type="submit" class="btn btn-block btn-success">注册</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data(){
        return{
            name:'',
            nickname:'',
            email:'',
            password:'',
            confirmPassword:'',
            isRepeated:true
        }
    },
    methods:{
        onSubmit(){
            if(this.password === this.confirmPassword){
                const formData = {
                    email:this.email,
                    nickname:this.nickname,
                    password:this.password,
                    name:this.name
                }
                axios.post('/user/register',formData)
                     .then(res => {
                         if(res.data.code==0){
                            this.$router.push({name:'loginLink'})
                            alert("注册成功");
                         }else{
                            this.isRepeated=false
                         }
                     })          
            }else{
                alert("两次密码不一致！！");
            }
        }
    }
}
</script>
<style scoped>
    .warn {
        display: inline-block;
        color: red;
        margin-left: 10px;
    }
    .success{
        display: none;
    }
</style>

