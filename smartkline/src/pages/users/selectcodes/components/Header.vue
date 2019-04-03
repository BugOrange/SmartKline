<template>
    <div class="header">
        <div class="leftcp">
            <button class="leftbtn" @click="leftBtnAction">返回</button>
        </div>
        <div class="centercp">
            <p class="header-title">Orange</p>
        </div>
        <div class="rightcp">
            <button class="rightbtn" @click="rightBtnAction">保存</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SelecHeader',
    props: {
        message: Array
    },
    data () {
        return {
            listArray: []
        }
    },
    methods: {
        updateSelect (res) {
            console.log(res)
            var obj = res.results[0]
            let current = Bmob.User.current()

            const query = Bmob.Query('CodesSelect');
            query.get(obj.objectId).then(res => {
            console.log(res)
            res.set('codes',this.message)
            res.save()
            this.$vux.toast.text('保存成功')
            }).catch(err => {
            console.log(err)
            this.$vux.toast.text('网络错误')
            })

        },
        addSelect () {
            let current = Bmob.User.current()

            //添加自选方案
            const query = Bmob.Query('CodesSelect')
            query.set("codes",this.message)
            query.set("authorCode",current.objectId)
            query.set("type","0")
            query.save().then(res => {
                console.log(res)
                const relation = Bmob.Relation('CodesSelect') // 需要关联的表
                const relID = relation.add([res.objectId]) //关联表中需要关联的objectId, 返回一个Relation对象, add方法接受string和array的类型参数
                const query = Bmob.Query('_User')
                query.get(current.objectId).then(res => {
                res.set('selects',relID)
                res.save()
                this.$vux.toast.text('保存成功')
                })
            }).catch(err => {
                console.log(err)
                this.$vux.toast.text('网络错误')
            })
        },
        leftBtnAction () {
            this.$router.push({path:'/'})
        },
        rightBtnAction () {

            let current = Bmob.User.current()

            console.log(current)

            const query = Bmob.Query('_User')
            query.field('selects',current.objectId)
            query.relation('CodesSelect').then(res => {
                console.log(res)
                if (res.count === 0) {
                    this.addSelect()
                } 
                else {
                    this.updateSelect(res)
                }
            })
            console.log(this.message)
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
                color $defaultTextColor
                

</style>
