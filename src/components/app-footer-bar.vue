<template>
    <div class="footer-bar">
        <!-- <p :class="{ active: currentPage === i + 1 }" v-for="item,i in tabBar" @click="goToPage(i)" :key="i">{{ item }}</p> -->
        <p :class="{ active: currentPage === 1 }" @click="goToPage(0)">
            <i class="iconfont icon-wangyiyunyinle" style="color:#bfc;"></i>
            发现
        </p>
        <p :class="{ active: currentPage === 2 }" @click="goToPage(1)">
            <i class="iconfont icon-31wode"></i>
            用户
        </p>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    name: "AppFooterBar",
    props: {
        currentPage: {
            type: Number,
            default: 1
        }
    },
    setup(props, { emit }) {
        const tabBar = ref(null)
        tabBar.value = ['首页', '我的']
        const goToPage = (i) => {
            emit('goToPage', i)
        }

        return {
            tabBar,
            goToPage
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
    bottom: -0.02rem;
    height: 0.50rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    font-size: 0.14rem;

    p {
        width: 50vw;
        text-align: center;
        height: 100%;
        line-height: 0.50rem;
        transition: all 0.4s;

    }
}

.active {
    background-color: rgba(235, 235, 235, 0.904);
}
</style>