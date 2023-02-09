<template>
    <div ref="container" class="container">
        <!-- 当前两个模块 -->
        <div class="outer">
            <p>
                <router-view></router-view>
            </p>
            <p>
                <router-view name="Podcasting"></router-view>
            </p>
        </div>
        <!-- 底部导航栏 -->
        <AppFooterBar @goToPage="goToPage" :currentPage="currentPage" />
    </div>
</template>
<script>
import Discover from "./Discover/index.vue";
import AppTopNav from "@/components/app-top-nav.vue";
import AppFooterBar from "@/components/app-footer-bar.vue";
import { UI } from "@/hooks/Layout";
export default {
    name: "Layout",
    components: {
        AppTopNav,
        AppFooterBar,
    },
    setup() {
       //记录当前页
       let ui = new UI();
        console.log(ui);
        //跳转页面
        const goToPage = (num) => {
            console.log(num);
            ui.container.value.scrollLeft = window.__clientWidth * num;
        };
        return {
            ...ui,
            goToPage,
        };
    },
};
</script>
<style lang="less" scoped>
.container {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    font-size: 0.16rem;
}

.outer {
    background-color: #f5f5f5;
    height: 100%;
    width: 220vw;
    display: flex;
    flex-direction: row;
}

.outer::after {
    content: "没有更多了🤗";
    font-size: 0.16rem;
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
}

.outer>p {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    width: 100vw;
    height: 100vh;
    background-color: #eee;
    font-weight: 900;
    font-size: 0.16rem;

    >div {
        height: 100vh;
        width: 100vw;
    }
}
</style>