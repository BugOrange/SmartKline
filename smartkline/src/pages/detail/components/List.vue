<template>
    <div>
        <div class="price-detail-today">
            <p class="default-text">low:{{this.pagedata.low}}</p>
            <p class="default-text">high:{{this.pagedata.high}}</p>
            <p class="default-text">bid:{{this.pagedata.bid}}</p>
            <p class="default-text">ask:{{this.pagedata.ask}}</p>
        </div>
        <p class="asks-text">asks</p>
        <div class="detail-list" v-for="(item, index) of reverseAsks" :key="index">
            <p class="price-text">{{item.price}}</p>
            <p class="volume-text">{{item.volume / 100}}</p>
        </div>
         <div class="gap"></div>
         <p class="bids-text">bids</p>
        <div class="detail-list" v-for="(item, index) of this.listbids" :key="index + 'x'">
            <p class="price-text">{{item.price}}</p>
            <p class="volume-text">{{item.volume / 100}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        message: String,
    },
    mounted () {
        // this.getData()
        let date = new Date()
        if(date.getHours() >= 9 && date.getHours() <= 14) {
            console.log('its in time')
            this.timer = setInterval(this.getData, 1000)
        }
        else {
            this.getData()
        }
        
    },
    beforeDestroy () {
        if (!this.timer) return
        clearInterval(this.timer)
    },
    data() {
        return {
            listbids: [],
            listasks: [],
            pagedata: Object,
            timer: Object
        }
    },
    computed: {
        reverseAsks () {
            return this.listasks.reverse()
        }
    },
    methods: {
        getData() {
            var kmessage = this.message.slice(2,this.message.length)
            console.log(kmessage)
            let url = "https://api.shenjian.io"
            this.$jsonp(url,{'appid':'560d2f61da546eee0ea2b506ba572508','codes':kmessage}).then(json => {
                console.log(json)
                var errorcode = json.error_code
                var data = json.data
                if (!data) return
                if (data.constructor == Array) {
                    console.log('it is a Array')
                    this.list = data
                }
                else if (data.constructor == Object) {
                    console.log('it is a Object')
                    this.listbids = data.bids
                    this.listasks = data.asks
                    this.pagedata = data
                }
                
            }).catch(err => {
                console.log(err)
            })
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    .price-detail-today
        line-height .58rem
        display flex
        justify-content: space-between
        background 	#E0E0E0
        .default-text
            color gray
    .detail-list
        display: flex
        overflow hidden
        justify-content flex-start
        flex-wrap nowrap
        width 100%
        line-height  .38rem
        .price-text
            color black  
        .volume-text
            color gray
            padding-left 1rem
    .gap
        // line-height .28rem
        min-height .28rem
        background 	#E0E0E0
    .bids-text
        color red
        line-height .38rem
    .asks-text
        color green
        line-height .38rem
        
</style>
