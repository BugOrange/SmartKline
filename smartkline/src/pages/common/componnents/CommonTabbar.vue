<template>
    <div>
        <tabbar>
            <tabbar-item link="/" >
                <img slot="icon" src="~@/assets/images/home.png">
                <span slot="label">主页</span>
            </tabbar-item>


            <tabbar-item link="/reading" selected>
                <img slot="icon" src="~@/assets/images/reading.png">
                <span slot="label">阅读</span>
            </tabbar-item>


            <tabbar-item link="/personcenter" >
                <img slot="icon" src="~@/assets/images/mine.png">
                <span slot="label">我的</span>
            </tabbar-item>

            
        </tabbar>
    </div>
</template>

<script>
import {Tabbar,TabbarItem} from 'vux'
export default {
    name: 'CommonTabbar',
    props: {
        selected: 1
    },
    components: {
        Tabbar,
        TabbarItem
    }
}
</script>

<style lang="stylus" scoped>

</style>
