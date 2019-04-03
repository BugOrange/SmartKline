<template>
    <div>
        <grid :cols="2" :show-lr-borders="false">
            <grid-item :label="'item'+i" v-for="i in 12" :key="i">
                <img slot="icon" src="~@/assets/logo.png">
            </grid-item>
        </grid>
    </div>
</template>

<script>
import {Grid,GridItem} from 'vux'
export default {
    name: 'ReadingList',
    components: {
        Grid,
        GridItem
    }
}
</script>

<style lang="stylus" scoped>

</style>
