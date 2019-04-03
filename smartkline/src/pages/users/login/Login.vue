<template>
    <div>
        <login-header></login-header>
        <div class="user">
            <div class="content">
                <input class="usrinput" type="text" v-model="username" placeholder="用户名">
                <input class="pasinput" type="text" v-model="password" placeholder="密码">
                <div class="loginCP">
                    <button class="registerBtn" @click="registerAction">注册</button>
                    <button class="loginBtn" @click="loginAction">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import LoginHeader from './components/Header'
export default {
    name: 'Login',
    components: {
        LoginHeader
    },
    data () {
        return {
            username: '',
            password: '',
            message: 'hello'
        }
    },
    methods: {
        registerAction () {
            this.$router.push({path:'/register'})
        },
        loginAction () {
            Bmob.User.login(this.username,this.password).then(res => {
                console.log(res)
                this.message = '登录成功'
                this.$vux.toast.text(this.message)
                setTimeout(()=>{
                    this.$router.push({path:'/'})
                },1000)
            }).catch(err => {
                console.log(err)
                this.message = '登录失败'
                this.$vux.toast.text(this.message)
            });
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .user 
        display flex
        justify-content center
        .content
            display flex
            align-items  center
            padding-top 1rem 
            width 80%
            flex-direction column
            .usrinput
                width  100%
                margin-top .28rem   
                background $defaultBGColor
                height .48rem
            .pasinput
                background red
                width 100%
                margin-top .28rem
                background $defaultBGColor
                height .48rem
            .loginCP
                display flex
                background white
                width 100%
                justify-content space-between
                margin-top .28rem
                .registerBtn
                    width 45%
                    height .48rem
                .loginBtn
                    width 45%
                    height .48rem


</style>
