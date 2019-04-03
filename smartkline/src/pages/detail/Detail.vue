<template>
    <div>
        <detail-header></detail-header>
        <detail-list :message="code"></detail-list>
    </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
    name: 'Detail',
    components: {
        DetailHeader,
        DetailList
    },
    data() {
        return {
            code: this.$route.params.id
        }
    },
    mounted() {
        // console.log(this.$route.params.id)
    }   
}
</script>

<style lang="stylus" scoped>

</style>

