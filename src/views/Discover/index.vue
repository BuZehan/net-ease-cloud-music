<template>
    <div id="DiscoverPage">
        <!-- 路由出口 -->
        <router-view name="Discovering" v-slot="{ Component }">
            <transition name="Fade">
                <component :is="Component" />
            </transition>
        </router-view>

        <DiscoveringTop id="DiscoveringTop">
            <template #left><i class="iconfont icon-gengduo liebiao"></i></template>
            <input class="discovering-input" type="text">
            <template #right><i class="iconfont icon-yinle music"></i></template>
        </DiscoveringTop>
        <div id="Content">
            <div class="content">
            </div>
            <router-link to="/discover">discover</router-link>
        </div>
        <Teleport to="#dailog">
        </Teleport>
    </div>
</template>
<script>
//引入组件
import DiscoveringTop from '@/components/discovering-top.vue'
import DiscovePage from './components/discover.vue';
//API
import { findHomePage } from '@/api/discovering';

import { ref } from 'vue'
export default {
    components: { DiscoveringTop, DiscovePage },
    name: 'Discovering',
    setup() {
        const banners = ref(null)
        const data = ref(null)
        // findHomePage().then(res => {
        //     data.value = res
        //     banners.value = res.data.blocks[0].extInfo.banners
        //     console.log('res :', res)
        // }).catch(err => console.log('err :', err))





        return {
            banners,
            data
        }
    }
}
</script>
<style lang="less" scoped>
#DiscoverPage {

    #DiscoveringTop {
        position: relative;

        .home-top {
            position: fixed;
            top: 0;
        }

        .discovering-input {
            width: 2.7rem;
            border-radius: 0.5rem;
            padding: 0.05rem 0.1rem;
        }

        .liebiao {
            transform: scale(1.2);
            padding-left: 0.08rem;
        }

        .music {
            padding-right: 0.08rem;
            transform: scale(1.2);
        }
    }

    #Content {
        height: 100vh;
        width: 100vw;
        overflow-y: scroll !important;
        overflow-x: scroll;

        .content {
            height: 1rem;
            background-color: rgb(217, 198, 198);
            margin-bottom: 0.1rem;
        }
    }
}
</style>