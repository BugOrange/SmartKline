<template>
    <div>
        <div class="search">
            <input v-model="searchCode" class="search-input" type="text" placeholder="输入代码进行搜索">
            <button class="search-btn" @click="searchAction">搜索</button>
        </div>
        <div class="content">
            <span class="name">{{searchResult.name}}</span>
            <button class="add-btn" @click="addAction">添加</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SelectSearch',
    data () {
        return {
            searchCode: '',
            searchResult: {}
        }
    },
    methods: {
        searchAction () {
            
            let url = "https://api.shenjian.io"
            this.$jsonp(url,{'appid':'560d2f61da546eee0ea2b506ba572508','codes':this.searchCode}).then(json => {
                console.log(json)
                var errorcode = json.error_code
                var data = json.data
                if (!data) return
                if (data.constructor == Array) {
                    console.log('it is a Array')

                }
                else if (data.constructor == Object) {
                    console.log('it is a Object')
                    this.searchResult = data
                }
                
            }).catch(err => {
                console.log(err)
                this.searchResult = {}
            })
        },
        addAction () {
            this.$emit("listenToChildEvent",this.searchResult)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .search
        display flex
        width 100%
        height .58rem
        justify-content space-between
        .search-input
            width 69%
            background $defaultBGColor
        .search-btn
            width 30%
    .content
        display flex
        width 100%
        height .58rem
        margin-top .08rem
        margin-bottom .08rem
        justify-content space-between
        .name
            width 69%
            line-height .58rem
            background $defaultBGColor
        .add-btn
            width 30%
</style>

