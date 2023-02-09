<template>
    <div class="currentPage">
        <p v-for="item, i in navList" :key="i" :class="{ active: currentPage === i + 1 }">{{ item.currentPageName }}</p>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    name: 'AppTopNav',
    props: {
        currentPage: {
            type: Number,
            default: '123'
        }
    },
    setup() {
        const navList = ref([])
        navList.value = [{ currentPageName: 'Page-Home' }, { currentPageName: 'Page-User' }, { currentPageName: 'Page-3' }, { currentPageName: 'Page-4' }]


        return {
            navList
        }
    }
}
</script>
<style lang="less" scoped>
.currentPage {
    position: fixed;
    width: 100vw;
    top: 0;
    height: 0.4rem;
    display: flex;
    background: @xbColor;
    justify-content: space-around;
    align-items: center;
    font-size: 0.13rem;

    .active {
        color: #fff;
        transition: all 0.3s;

    }
}
</style>