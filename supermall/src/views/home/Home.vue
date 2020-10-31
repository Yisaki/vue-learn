<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物车</div>
    </NavBar>

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
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata} from "@/network/home"

export default {
  name: "Home",
  components:{
    TabBar,
    TabBarItem,
    NavBar
  },
  data(){
    return {
      banners:[],
      recommends:[]
    }
  },
  created() {
    getHomeMultidata().then((data)=>{
      console.log(data);
      this.result=data;
    })
  }
}
</script>

<style scoped>
.home-nav {
  background-color: pink;
  color: white;
}
</style>
