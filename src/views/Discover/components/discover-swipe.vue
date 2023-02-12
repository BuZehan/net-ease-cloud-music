<template>
    <div>
        <Swipe v-if="banners" class="my-swipe" lazy-render :autoplay="3000">
            <swipe-item class="swipe-item" v-for="image, i in banners" :key="image">
                <div class="img-wrapper">
                    <img :src="image.pic" />
                    <i :style="{ color: banners[i].titleColor }">{{ banners[i].typeTitle }}</i>
                </div>
            </swipe-item>
            <template #indicator="{ active, total }">
                <div class="custom-indicator">
                    <a v-for="dot, i in total" :class="{ 'active-indicator': active + 1 === dot }" :key="i"></a>
                </div>
            </template>
        </Swipe>
        <app-skeleton v-else width="100vw" height="200px" animated />
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
import { findHomePage } from '@/api/discovering';
import { ref } from 'vue'

export default {
    name: "DiscoverSwipe",
    components: {
        Swipe, SwipeItem
    },
    setup() {
        const banners = ref(null)
        const data = ref(null)
        findHomePage().then(res => {
            data.value = res
            banners.value = res.data.blocks[0].extInfo.banners
            console.log('首页res :', res)
            console.log('banners :', banners)
        }).catch(err => console.log('err :', err))

        return {
            banners,
            data
        }
    }
}
</script>
<style lang="less" scoped>
.my-swipe {
    padding: 10px 0;
    background-color: #ffffff;
    background: linear-gradient(180deg, #FFDEE9 10%, #b5fffd 70%,#ffffff);

    .custom-indicator {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 6px;
        padding: 2px 5px;
        font-size: 12px;

        a {
            display: inline-block;
            position: static;
            width: 8px;
            height: 8px;
            margin: 0 1px;
            border-radius: 50%;
            background-color: #999999c0;
            opacity: 0.5;
        }

        .active-indicator {
            background-image: linear-gradient(60deg, #4effa1 0%, #fff700 100%);
            opacity: 1;
        }
    }

    .swipe-item {
        position: relative;

        .img-wrapper {
            overflow: hidden;

            img {
                width: 90%;
                height: 90%;
                border: 1px solid #dddddd53;
                margin-left: 5%;
                border-radius: 7px;
            }

            i {
                position: absolute;
                z-index: 5;
                transform: scale(0.9);
                bottom: 4px;
                right: 15px;
                font-size: 10px;
                background-color: #fff;
                padding: 0 2px;
                box-shadow: -2px 2px 1px rgba(146, 146, 146, 0.389);
            }
        }

    }
}
</style>