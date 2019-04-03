<template>
    <div>
        <group>
            <cell title='退出登录' is-link @click.native="logout"></cell>
            <cell title='关于' is-link :link="{path:'/about'}"></cell>
        </group>
        <!-- <div class="list">
            <div class="btn-logout">
                <button @click="logout">退出登录</button>
            </div>
        </div> -->
    </div>
        
</template>

<script>
import {Cell,Group} from 'vux'
export default {
    name: 'PersonSetting',
    components: {
      Cell,
      Group
    },
    data () {
        return {
            message: '' 
        }
    },
    methods: {
        logout () {
            
            const _this = this // 需要注意 onCancel 和 onConfirm 的 this 指向
            this.$vux.confirm.show({
                content: '是否确认退出登录？',
                onCancel () {
                    console.log(_this) // 当前 vm
                },
                onConfirm () {
                    Bmob.User.logout()
                    _this.message = '退出登录'
                    setTimeout(()=>{
                        _this.$router.push({path:'/'})
                    },1000)
                }
            })

            
        }
    }
}
</script>

<style lang="stylus" scoped>
    .list
        display flex
        background #DCDCDC
        justify-content center
        width 100%
        .btn-logout
            display flex
            width 90%
            justify-content flex-end
            height .78rem
</style>
