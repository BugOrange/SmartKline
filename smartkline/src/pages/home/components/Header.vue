<template>
    <div class="header">
        <div class="leftcp" @click="leftBtnAction">
            <button class="leftbtn">编辑</button>
        </div>
        <div class="centercp">
            <p class="header-title">Orange</p>
        </div>
        <div class="rightcp">
            <button class="rightbtn" @click="rightBtnAction"></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    methods: {
        leftBtnAction () {
            let current = Bmob.User.current()
            if (!current) {
                this.$router.push({path:'/login'})
            }
            else {
                console.log(current)
                this.$router.push('Select')
            }
        },
        rightBtnAction () {
            // this.toast('hello')
            // return
            //获取用户当前信息
            return
            let current = Bmob.User.current()

            if (!current) {
                this.$router.push({path:'/login'})
            }
            else {
                console.log(current)
                this.$router.push({name:'PersonCenter'})
            }

            
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .header
        display flex
        background $navibarColor
        line-height $naviBarHeight
        justify-content space-between
        align-items center
        width 100%
        .leftcp
            // background #444444
            width 30%
            .leftbtn
                background $navibarColor 
                padding-left .25rem
                color $defaultTextColor
        .centercp
            display flex
            // background #222222
            .header-title
                padding-left 0rem
                color white
        .rightcp
            // background #333333
            min-width 30%
            display flex
            justify-content flex-end
            .rightbtn
                background $navibarColor
                padding-right .25rem
                color $defaultTextColor
                

</style>
