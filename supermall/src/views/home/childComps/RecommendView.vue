<template>
    <div class="recommond">
        <div v-for="item in recommends" :key="item.id" class="recommond-item">
            <a :href="item.link">
                <img :src="require('@/assets/img/home/'+item.image+'.svg')" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>


export default {
    name: 'RecommendView',
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            },
        },
    },
    data() {
        return {}
    }
}
</script>

<style scoped>
    .recommond{
        display: flex;
        padding: 15px 0 30px;
        border-bottom: 10px solid #eee;
    }
    .recommond-item{
        flex: 1;
        text-align: center;
        font-size: 12px;
    }
    .recommond-item img{
        width: 65px;
        height: 65px;
        margin-bottom: 10px;
    }
</style>
