<template>
    <div class="header">
        <router-link to="/">
            <div class="backBtn">返回</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader'    
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .header
        background $navibarColor 
        line-height $naviBarHeight
        .backBtn
            padding-left .25rem
            color white
</style>
