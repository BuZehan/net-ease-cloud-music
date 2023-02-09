<template>
    <div class="footer-bar">
        <p :class="{active:currentPage === i+1}" v-for="item,i in tabBar" @click="goToPage(i)" :key="i">{{item}}</p>
    </div>
</template>
<script>
import {ref} from 'vue'
export default {
    name: "AppFooterBar",
    props:{
        currentPage:{
            type:Number,
            default:1
        }
    },
    setup(props,{emit}) {
        const tabBar = ref(null)
        tabBar.value = ['Page1','Page2','Page3','Page4']

        const goToPage = (i) => {
            emit('goToPage',i)
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
    left: 0;
    right: 0;
    bottom: -0.02rem;
    height: 0.35rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: @xbColor;
    font-size: 0.12rem;
    p{
        width: 25vw;
        text-align: center;
        height: 100%;
        line-height: 0.35rem;
    transition: all 0.4s;

    }
}
.active{
    background-color: hotpink;
}
</style>