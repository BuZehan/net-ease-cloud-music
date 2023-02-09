<template>
    <div ref="container" class="container">
        <!-- 顶部提示栏 -->
        <!-- <AppTopNav :currentPage="currentPage" /> -->
        <div class="outer">
            <p>
                <Home />
            </p>
            <p>
                <User />
            </p>
            <p>page-3</p>
            <p>page-4</p>
        </div>
        <!-- 底部导航栏 -->
        <AppFooterBar @goToPage="goToPage" :currentPage="currentPage"  />
    </div>
</template>
<script>
import Home from './Home/index.vue';
import User from './User/idnex.vue';
import AppTopNav from '@/components/app-top-nav.vue';
import AppFooterBar from '@/components/app-footer-bar.vue';
import { ref, nextTick } from 'vue'
export default {
    name: 'Layout',
    components: {
        Home,
        User,
        AppTopNav,
        AppFooterBar
    },
    setup() {
        //记录当前页
        class UI {
            constructor() {
                nextTick(() => {
                    this.container.value.addEventListener("scroll", (e) => {
                        let scrollLeft = Math.floor(e.target.scrollLeft)
                        // console.log('scrollLeft:', scrollLeft, 'documentClient:', clientWidth, 'currentPage:', Math.round(scrollLeft / clientWidth) + 1)
                        this.currentPage.value = Math.round(scrollLeft / window.__clientWidth) + 1
                    })
                })
                this.container = ref(null)
                this.currentPage = ref(1)
                this.clientWidth = window.__clientWidth
            }
        }
        let ui = new UI()
        console.log(ui)



        //跳转页面
        const goToPage = (num) => {
            console.log(num)
            ui.container.value.scrollLeft = window.__clientWidth * num
        }


        return {
            ...ui,
            goToPage
        }
    }
}
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
    width: 420vw;
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
    width: 100%;
    height: 100%;
    background-color: #eee;
    font-weight: 900;
    font-size: 0.16rem;

    >div {
        height: 100%;
        width: 100%;
    }
}
</style>