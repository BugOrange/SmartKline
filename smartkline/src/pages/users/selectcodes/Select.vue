<template>
    <div>
        <select-header :message="klist"></select-header>
        <select-search v-on:listenToChildEvent="sendMsgFromChild"></select-search>
        <draggable v-model="myArray">
            <transition-group>
                <div class="item" v-for="(element,index) in myArray" :key="element.code">
                    
                    <p class="name">
                        {{element.name}}
                    </p>
                    <button class="delbtn" @click="deleteAction(index)">删除</button>
                   
                </div>
            </transition-group>
        </draggable>
    </div>
</template>

<script>
import SelectHeader from '@/pages/users/selectcodes/components/Header'
import draggable from 'vuedraggable'
import SelectSearch from '@/pages/users/selectcodes/components/Search'
export default {
    name: 'Select',
    components: {
        SelectHeader,
        draggable,
        SelectSearch
    },
    data () {
        return {
            myArray: [],
            test: 'hahahah'
        }
    },
    computed: {
        klist () {
            var list = []
            for (var i = 0; i < this.myArray.length; i++) {
                var code = this.myArray[i].code
                var reg = /[0-9][0-9]*/g
   
                code = code.match(reg)[0]
                list.push(code)
            }
            // list = ['002571','600056','000703','601233','600259','000795','002750','600624','601108','000725','000830','002407','002475','600352','000159','600831','000100']
            return list
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
                    this.loadUserData(obj.codes.join(","))
                    
                } 
               
            })
        }
    },
    methods: {
        deleteAction (index) {
            console.log(index)
            
            // 显示
            const _this = this // 需要注意 onCancel 和 onConfirm 的 this 指向
            this.$vux.confirm.show({
            // 组件除show外的属性
            content: '是否确认要删除该自选？',
            theme: 'ios',
            onCancel () {
                console.log('no')
            },
            onConfirm () {
                _this.myArray.splice(index,1)
            }
            })

        },
        sendMsgFromChild:function (data) {
            console.log(data)
            var code = data.code
            if (code) {
                
                if (this.myArray.indexOf(data) === -1) {
                    this.myArray.push(data)
                }
                
            }
        },
        loadUserData (baseCodes) {
            let url = "https://api.shenjian.io"
            this.$jsonp(url,{'appid':'560d2f61da546eee0ea2b506ba572508','codes':baseCodes}).then(json => {
                console.log(json)
                var errorcode = json.error_code
                var data = json.data
                if (!data) return
                if (data.constructor == Array) {
                    console.log('it is a Array')
                    this.myArray = data
                }
                else if (data.constructor == Object) {
                    this.myArray.push(data)
                }
                
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .item 
        display flex
        width 100%
        margin-top .02rem
        margin-bottom .02rem
        justify-content space-between
        // background $defaultBGColor
        .name
            width 69%
            line-height .58rem
            background $defaultBGColor
        .delbtn
            width 30%
            height .58rem
            background $defaultBGColor
</style>
