<template >
    <div>
        <p class="title">
            <span @click="clickMore">{{ data.uiElement.subTitle.title }}
                <icon name="arrow" />
            </span>
            <span><i class="iconfont icon-androidgengduo more"></i></span>
        </p>
        <div class="block-items">
            <div>
                <p v-for="(item, i) in data.creatives" :key="i" class="item">
                    <a href="javascript:;">
                        <img v-if="item.uiElement" v-lazy="item.uiElement.image.imageUrl" alt="">
                        <app-skeleton v-else animated></app-skeleton>
                    </a>
                    <span v-if="item.uiElement">{{ item.uiElement.mainTitle.title }}</span>
                    <app-skeleton v-else animated width="100" ></app-skeleton>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import { Icon } from 'vant'
export default {
    name: "DiscoverBlocksTypeFirst",
    components: {
        Icon
    },
    props: {
        data: {
            type: [Array, Object],
            default: () => []
        }
    },
    setup(props, { emit }) {

        const clickMore = (e) => {
            emit('clickMore', "点击更多")
        }
        return {
            clickMore
        }
    }
}
</script>
<style lang="less" scoped>
    .title {
        display: flex;
        height: 20px;
        padding: 2px 15px;
        padding-bottom: 0;
        background-color: #fff;
        justify-content: space-between;
        color: #000000;
        font-size: 13px;
        padding-top: 5px;
    
        .more {
            color: #555;
        }
    }
    
    .block-items {
        width: 100vw;
        height: 175px;
        overflow-x: scroll;
        box-shadow: 0px 1px 1px #88888823;
        margin-bottom: 5px;
        margin-top: 7px;
    
        div {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0 3px;
    
            .item {
                width: 120px;
                height: 150px;
    
                a {
                    display: inline-block;
                    width: 105px;
                    height: 105px;
                    border-radius: 8px;
                    margin: 10px;
                    overflow: hidden;
    
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
    
                span {
                    display: inline-block;
                    width: 130px;
                    box-sizing: border-box;
                    padding: 0 5px;
                    font-size: 14px !important;
                    font-weight: normal;
                    margin-top: -10px;
                    height: 36px;
                    word-break: break-all;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    text-align: justify;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    transform: scale(0.85);
                }
            }
        }
}

</style>