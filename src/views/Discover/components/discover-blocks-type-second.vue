<template >
    <div>
        <p class="title">
            <span @click="clickMore">{{ data.uiElement.subTitle.title }}
                <icon name="arrow" />
            </span>
            <span><i class="iconfont icon-androidgengduo more"></i></span>
        </p>
        <div id="HOMEPAGE_SLIDE_PLAYLIST">
            <div class="scroll-item" v-for="(item, i) in data.creatives" :key="i">
                <p v-for="(res) in item.resources" :key="item.resourceId">
                    <a href="javascript:;"><img v-lazy="res.uiElement.image.imageUrl" alt=""></a>
                <div class="scroll-item-right" v-if="res">
                    <p v-if="res.uiElement.mainTitle" class="mname">{{ res.uiElement.mainTitle.title }} </p>
                    <p v-if="res.resourceExtInfo && res.uiElement.subTitle" class="mrcm">
                        <span>{{ res.uiElement.subTitle.title }} &nbsp;&nbsp;&nbsp; </span>
                        <span v-for="artist, i in res.resourceExtInfo.artists" :key="i">{{ artist.name }}
                            &nbsp;&nbsp;</span>
                    </p>
                </div>
                <i></i>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import { Icon } from 'vant'
export default {
    name: "DiscoverBlocksTypeSecond",
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

#HOMEPAGE_SLIDE_PLAYLIST {
    display: flex;
    margin-top: 10px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    box-shadow: 0px 1px 1px #88888810;
    padding-bottom: 5px;
    margin-bottom: 5px;
    .scroll-item {
        width: 320px;
        height: 200px;
        margin-left: 15px;
        flex-shrink: 0;
        scroll-snap-stop: always;
        scroll-snap-align: start;
        scroll-margin-left: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        p {
            width: 100%;
            height: (100% / 3.2);
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                display: block;
                width: 50px;
                height: 50px;
                border-radius: 5px;
                box-shadow: 0px 0px 10px #00000018;
                overflow: hidden;
            }

            .scroll-item-right {
                width: 70%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: flex-start;
                height: 100%;
                font-size: 14px;
                transform: scale(0.95);
                font-weight: normal;

                .mname {
                    color: #333;
                }

                .mrcm {
                    justify-content: flex-start;
                    font-size: 10px;
                    color: #00000059;

                    span {
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }

                    span:nth-child(1) {
                        text-align: center;
                        border-radius: 7px;
                        min-width: 40%;
                        display: block;
                        text-align: start;
                        color: rgba(255, 80, 36, 0.811);
                    }
                }
            }
        }
    }
    .scroll-item:nth-last-child(1) {
        scroll-margin-left: 14px;
        margin-right: 40px;
    }
}
</style>