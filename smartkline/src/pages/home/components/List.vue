<template>
    <div>
        <ul>
            <router-link
                class="item-info"
                tag="li"
                v-for="(item, index) of this.list"
                :key="index"
                :to="'/detail/' + item.code"
            >
                <p class="item-name">{{item.name.substring(0,1)}}</p>
                <p class="item-price" v-if="flag === false">{{item.bid}}</p>
                <p class="item-price" v-else>{{item.price}}</p>
                <p class="item-value" v-if="flag === false">{{((item.bid - item.pre_close) / item.pre_close * 100).toFixed(2)}} %</p>
                <p class="item-value" v-else>{{((item.price - item.pre_close) / item.pre_close * 100).toFixed(2)}} %</p>
            </router-link>
            
        </ul>
        <!-- <p>{{this.kdata}}</p> -->
    </div>
</template>

<script>
export default {
    name: 'HomeList',
    data() {
        return {
            list: [],
            timer: Object,
            flag: false,
            // kdata: Object,
            zixuanList: "002571,600056,000703,601233,600259,000795,002750,600624,601108,000725,000830,002407,002475,600352,000159,600831,000100"
        }
    },
    mounted () {
        

        let current = Bmob.User.current()
        if (!current) {
            
            
        }
        else {
            const query = Bmob.Query('_User')
            query.field('selects',current.objectId)
            query.relation('CodesSelect').then(res => {
                console.log(res)
                if (res.count > 0) {
                    var obj = res.results[0]
                    this.zixuanList = obj.codes.join(",")
                    console.log(obj.codes.join(","))
                } 
               
            })
        }
        let date = new Date()
        if(date.getHours() >= 9 && date.getHours() <= 14) {
            console.log('its in time')
            this.timer = setInterval(this.getJpInfo, 1500)

            if (date.getHours() === 9) {
                if (date.getMinutes()<25) {
                    this.flag = false
                }
                else {
                    this.flag = true
                }
            }

        }
        else {
            setTimeout(()=>{
                this.getJpInfo()
            },2000)
        }
        console.log(date)

        
    },
    beforeDestroy () {
        if (!this.timer) return
        clearInterval(this.timer)
    },
    methods: {
        getJpInfo () {

            let url = "https://api.shenjian.io"
            this.$jsonp(url,{'appid':'560d2f61da546eee0ea2b506ba572508','codes':this.zixuanList}).then(json => {
                console.log(json)
                var errorcode = json.error_code
                var data = json.data
                if (!data) return
            
                console.log('it is a Array')
                this.list = data
               
                
            }).catch(err => {
                console.log(err)
            })
        },
        getJSInfo () {
            // var myScript= document.createElement("script")
            // myScript.type = "text/javascript"
            // myScript.src = "http://hq.sinajs.cn/list=sz002421"
            // document.body.appendChild(myScript)
            // this.kdata = hq_str_sz002421
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    .item-info
        display: flex
        overflow hidden
        justify-content space-between
        flex-wrap nowrap
        line-height  .38rem
        .item-name
            color: #cccccc
        .item-value
            color: #cccccc
        .item-price
            color  #cccccc
</style>


