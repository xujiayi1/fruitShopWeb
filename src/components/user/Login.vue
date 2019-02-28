<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../../../src/assets/icon.png" alt="">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" name="email" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" name="password" class="form-control" v-model="password">
                        </div>
                        <button type="submit" class="btn btn-block btn-success">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm=>vm.$store.dispatch("setUser",null))
    },
    methods:{
        onSubmit(){
            axios.get('/user/loginByEmail',{
                params:{
                    email:this.email,
                    password:this.password
                }
            })
            .then(res=>{
                const code=res.data.code//0为登录成功，1表示处理中，-1表示失败
                if(code==0){
                    const user=res.data.data;
                    this.$store.dispatch("setUser",user)
                    this.$router.push({name:"homeLink"})
                }else{
                    alert("账号或密码错误")
                }
            })
        }
    }
}
</script>