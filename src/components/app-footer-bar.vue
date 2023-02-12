<template>
    <div class="footer-bar">
        <!-- <p :class="{ active: currentPage === i + 1 }" v-for="item,i in tabBar" @click="goToPage(i)" :key="i">{{ item }}</p> -->


        <tabbar v-model="active">
            <tabbar-item icon="home-o"  @click="goToPage(0)">
                    发现
            </tabbar-item>
            <tabbar-item icon="friends-o"  @click="goToPage(1)">
                    用户
            </tabbar-item>
            <!-- <tabbar-item icon="friends-o">标签</tabbar-item>
            <tabbar-item icon="setting-o">标签</tabbar-item> -->
        </tabbar>

    </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
import { ref, watch } from 'vue'
export default {
    name: "AppFooterBar",
    components:{
        Tabbar,
        TabbarItem
    },
    props: {
        currentPage: {
            type: Number,
            default: 1
        }
    },
    setup(props, { emit }) {
        const active = ref(0);
        const goToPage = (i) => {
            emit('goToPage', i)
        }
        watch(() => props.currentPage,(v) => {
            //切换tabbar
            active.value = (v-1)
        },{
            immediate:true
        })
        return {
            goToPage,
            active
        }
    }
}
</script>
<style lang="less" scoped>
.footer-bar {
    position: fixed;
    box-sizing: content-box;
    z-index: 5000;
    left: 0;
    right: 0;
    bottom: 0;
    height: 45px;
}
:deep(.van-tabbar) {
    height: 45px;
}
:deep(.van-tabbar-item--active){
    color: var(--van-tabbar-item-active-color);
    background-color: var(--van-tabbar-item-active-background);
}
</style>