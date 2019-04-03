<template>
    <div>
        <common-header></common-header>
        <person-setting></person-setting>
        <tabbar>
            <tabbar-item link="/">
                <img slot="icon" src="~@/assets/images/home.png">
                <span slot="label">主页</span>
            </tabbar-item>


            <tabbar-item link="/reading" >
                <img slot="icon" src="~@/assets/images/reading.png">
                <span slot="label">阅读</span>
            </tabbar-item>


            <tabbar-item link="/personcenter" selected>
                <img slot="icon" src="~@/assets/images/mine.png">
                <span slot="label">我的</span>
            </tabbar-item>

        </tabbar>
    </div>
</template>

<script>
import CommonHeader from '@/pages/common/componnents/CommonHeader'
import PersonSetting from './components/PersonSetting'
import {Tabbar,TabbarItem} from 'vux'
export default {
    name: 'PersonCenter',
    components: {
        CommonHeader,
        PersonSetting,
        Tabbar,
        TabbarItem
    }
}
</script>

<style lang="stylus" scoped>

</style>
