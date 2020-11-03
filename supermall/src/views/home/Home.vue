<template>
    <div id="home">
        <NavBar class="home-nav">
            <div slot="center">购物车</div>
        </NavBar>
        <RecommendView :recommends="recommends">
          
        </RecommendView>


        <TabBar>
            <TabBarItem>
                <img slot="item-icon" src="@/assets/img/1.svg" alt="" />
                <div slot="item-text">首页</div>
            </TabBarItem>
            <TabBarItem>
                <img slot="item-icon" src="@/assets/img/1.svg" alt="" />
                <div slot="item-text">分类</div>
            </TabBarItem>
            <TabBarItem>
                <img slot="item-icon" src="@/assets/img/1.svg" alt="" />
                <div slot="item-text">购物车</div>
            </TabBarItem>
            <TabBarItem>
                <img slot="item-icon" src="@/assets/img/1.svg" alt="" />
                <div slot="item-text">我的</div>
            </TabBarItem>
        </TabBar>
    </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
import NavBar from '@/components/common/navbar/NavBar'
import RecommendView from './childComps/RecommendView'

import { getHomeMultidata } from '@/network/home'

export default {
    name: 'Home',
    components: {
        TabBar,
        TabBarItem,
        NavBar,
        RecommendView
    },
    data() {
        return {
            banners: [],
            recommends: [],
        }
    },
    created() {
        getHomeMultidata().then(data => {
            this.recommends = data
            console.log(this.recommends)
        })
    },
}
</script>

<style scoped>
.home-nav {
    background-color: pink;
    color: white;
}
</style>
