<template>
    <div id="DiscoverPage">
        <!-- 路由出口 -->
        <router-view name="Discovering" v-slot="{ Component }">
            <transition name="Fade">
                <component :is="Component" />
            </transition>
        </router-view>
        <!-- 首页顶部栏 -->
        <DiscoveringTop/>

        <!-- 首页内容 -->
        <div id="Content">
            <!-- 轮播图 -->
            <DiscoverSwipe/>
            <!-- 首页圆形图标入口列表 -->
                <DiscoverBallListItem />
        </div>


        <!-- 传送门 -->
        <Teleport to="#dailog">
        </Teleport>
    </div>
</template>
<script>
import DiscoveringTop from './components/discover-top.vue'
import DiscoverSwipe from './components/discover-swipe.vue';
import DiscoverBallListItem from './components/discover-ball-list-item.vue';
import { ref } from 'vue'



export default {
    components: { DiscoveringTop, DiscoverSwipe,DiscoverBallListItem},
    name: 'Discovering',
    setup() {



        return {

        }
    }
}
</script>
<style lang="less" scoped>
#DiscoverPage {
    

    #Content {
        height: 100vh;
        width: 100vw;
        overflow-y: scroll !important;
        overflow-x: scroll;

        .test {
            height: 100vh;
        }
    }
}
</style>