<template>
    <div>
        <register-header></register-header>
        <div class="user">
            <div class="content">
                <input class="usrinput" type="text" v-model="username" placeholder="用户名">
                <input class="pasinput" type="text" v-model="password" placeholder="密码">
                <input class="emailinput" type="text" v-model="email" placeholder="邮箱">
                <input class="phoneinput" type="text" v-model="phone" placeholder="手机号码">
                <div class="loginCP">
                    <button class="registerBtn" @click="registerAction">注册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RegisterHeader from './components/Header'
// import validater from './js/tools/tools.js'
export default {
    name: 'Register',
    components: {
        RegisterHeader
    },
    data () {
        return {
            username: '',
            password: '',
            email: '',
            phone: '',
            showMessage: ''
        }
    },
    methods: {
        registerAction () {
            
            if (!this.validater.emailValue(this.email)) 
            {
                this.$vux.toast.text('请填写合法email地址')
                return
            }

            if (!this.validater.phoneNumber('this.phone'))
            {
                this.$vux.toast.text('请填写合法手机号码')
                return
            }

            let params = {
                username: this.username,
                password: this.password,
                email: this.email,
                phone: this.phone,
            }
            Bmob.User.register(params).then(res => {
                console.log(res)
                this.showMessage = '注册成功'
                this.$vux.toast.text(this.showMessage)
            }).catch(err => {
                console.log(err)
                this.showMessage = '注册失败'
                this.$vux.toast.text(this.showMessage)
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
                width 100%
                margin-top .28rem   
                background $defaultBGColor
                height .48rem
            .emailinput
                width 100%
                margin-top .28rem   
                background $defaultBGColor
                height .48rem
            .phoneinput
                width 100%
                margin-top .28rem   
                background $defaultBGColor
                height .48rem
            .loginCP
                display flex
                background white
                width 100%
                justify-content center
                margin-top .28rem   
                .registerBtn
                    width 50%
                    background $defaultBGColor
                    height .48rem
               


</style>
