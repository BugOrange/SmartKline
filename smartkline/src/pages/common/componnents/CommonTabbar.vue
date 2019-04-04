<template>
    <div>
        <tabbar>
            <tabbar-item link="/" selected="homeSelected">
                <img slot="icon" src="~@/assets/images/home.png">
                <span slot="label">主页</span>
            </tabbar-item>


            <tabbar-item link="/reading" selected="readingSelected">
                <img slot="icon" src="~@/assets/images/reading.png">
                <span slot="label">阅读</span>
            </tabbar-item>


            <tabbar-item link="/personcenter" selected="mineSelected">
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
        selected: 0
    },
    data () {
        homeSelected = true,
        readingSelected = false,
        mineSelected = false
    },
    components: {
        Tabbar,
        TabbarItem
    },
    mounted () {
        if (this.selected ===0) {
            this.homeSelected = true
            this.readingSelected = false
            this.mineSelected = false
        }
        else if (this.selected === 1) {
            this.homeSelected = false
            this.readingSelected = true
            this.mineSelected = false
        }

        else if (this.selected ===2) {
            this.homeSelected = false
            this.readingSelected = false
            this.mineSelected = true
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
