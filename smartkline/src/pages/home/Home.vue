<template>
    <div>
        <home-header></home-header>
        <home-list></home-list>
        <tabbar>
            <tabbar-item link="/" selected>
                <img slot="icon" src="~@/assets/images/home.png">
                <span slot="label">主页</span>
            </tabbar-item>


            <tabbar-item link="/reading" >
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
import HomeHeader from './components/Header'
import HomeList from './components/List'
import {Tabbar, TabbarItem} from 'vux'
export default {
    name: "Home",
    components: {
        HomeHeader,
        HomeList,
        Tabbar,
        TabbarItem
    },
    mounted () {

    },
    methods: {
        getInfo () {
            
            // this.axios.get('https://api.shenjian.io', {
            //     params: {
            //         'appid': '560d2f61da546eee0ea2b506ba572508',
            //         'codes': '002421'
            //     }
            // })
            // .then(res => {
            //     console.log('there' + res);
            // }).catch(err => {
            //     console.log(err)
            // })
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>

