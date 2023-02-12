<template>
    <div id="ListItem">
        <DiscoverBallList ref="target" v-if="ballList">
            <p v-for="(icon, i) in ballList" class="ball-wrapper">
                <img v-lazy="icon.iconUrl" alt="">
                <span>{{ icon.name }}</span>
            </p>
        </DiscoverBallList>
        <app-skeleton width="100vw" height="60px" v-else animated></app-skeleton>
        <p class="scrollBar">
            <a ref="target_a" href="">
                <i></i>
            </a>
        </p>
    </div>
</template>
<script>
import { findBallList } from '@/api/discovering';
import DiscoverBallList from './discover-ball-list.vue'

import { onMounted, ref } from 'vue'
export default {
    name: "DiscoverBallListItem",
    components: {
        DiscoverBallList
    },
    setup() {
        const ballList = ref(null)
        const target = ref(null)
        const target_a = ref(null)

        findBallList().then((result) => {
            ballList.value = result.data
        }).catch((err) => {
        })
        onMounted(() => {
            setTimeout(() => {
                target.value.$el.addEventListener("scroll", (e) => {
                    let scrollLeft = Math.floor(e.target.scrollLeft)
                    target_a.value.style.transform = `translateX(${scrollLeft / 20}px)`
                })
            }, 500)
        })

        return {
            ballList,
            target,
            target_a
        }
    }
}
</script>
<style lang="less" scoped>
#ListItem {
    position: relative;

    .scrollBar {
        bottom: 4px;
        position: absolute;
        width: (100vw / 10);
        height: 2px;
        background-color: rgb(238, 238, 238);
        left: 50%;
        transform: translateX(-50%);

        a {
            display: inline-block;
            border-radius: 4px;
            background-color: rgb(41, 144, 255);
            height: 2px;
            position: absolute;
            transform: translateX(-1px);
            width: (100vw / 20);
        }
    }
}

.ball-wrapper {
    display: inherit;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
    align-items: center;
    width: 60px;
    height: 40px;
    position: relative;

    img {
        position: absolute;
        top: -50px;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        filter: drop-shadow(0px 40px 0 rgba(255, 30, 30));
    }

    span {
        font-size: 13px;
        transform: scale(0.9);
    }

}
</style>