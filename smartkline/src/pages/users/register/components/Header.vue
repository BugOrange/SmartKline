<template>
    <div class="header">
        <div class="leftcp">
            <button class="leftbtn" @click="leftBtnAction">返回</button>
        </div>
        <div class="centercp">
            <p class="header-title">账号注册</p>
        </div>
        <div class="rightcp">
            <button class="rightbtn" @click="rightBtnAction"></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterHeader',
    methods: {
        rightBtnAction () {
            console.log('yes')
            this.$router.push({path:'/login'})
        },
        leftBtnAction () {
            this.$router.go(-1)
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
                color red
                

</style>
