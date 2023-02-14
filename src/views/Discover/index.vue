<template>
    <div id="DiscoverPage">
        <!-- 路由出口 -->
        <router-view name="Discovering" v-slot="{ Component }">
            <transition name="Fade">
                <component :is="Component" />
            </transition>
        </router-view>
        <!-- 首页顶部栏 -->
        <DiscoveringTop />

        <!-- 首页内容 -->
        <div id="Content">
            <!-- 轮播图 -->
            <DiscoverSwipe :banners="banners" />
            <!-- 首页圆形图标入口列表 -->
            <DiscoverBallListItem />
            <!-- Block区域 -->
            <div id="BlockWrapper">
                <DiscoverBlocksTypeFirst v-if="blockObject.HOMEPAGE_BLOCK_PLAYLIST_RCMD"
                    :data="blockObject.HOMEPAGE_BLOCK_PLAYLIST_RCMD" />
                <DiscoverBlocksTypeSecond v-if="blockObject.HOMEPAGE_BLOCK_STYLE_RCMD"
                    :data="blockObject.HOMEPAGE_BLOCK_STYLE_RCMD" />
            </div>
        </div>


        <!-- 传送门 -->
        <Teleport to="#dailog">
        </Teleport>
    </div>
</template>
<script>
import DiscoveringTop from './components/discover-top.vue'
import DiscoverSwipe from './components/discover-swipe.vue';
import DiscoverBallListItem from './components/discover-ball-list-item.vue';
import DiscoverBlocksTypeFirst from './components/discover-blocks-type-first.vue'
import DiscoverBlocksTypeSecond from './components/discover-blocks-type-second.vue'
import { reactive, ref } from 'vue'
import { findHomePage } from '@/api/discovering';

export default {
    components: {
        DiscoveringTop, DiscoverSwipe,
        DiscoverBallListItem,
        DiscoverBlocksTypeFirst,
        DiscoverBlocksTypeSecond
    },
    name: 'Discovering',
    setup() {
        const data = ref(null)
        const banners = ref(null) //轮播图Banner
        const blocks = ref(null)  //blocks数据
        let blockObject = reactive({})
        //获取首页数据
        findHomePage().then(res => {
            data.value = res
            console.log('首页res :', res)
            //轮播图数据
            banners.value = res.data.blocks[0].extInfo.banners
            //Blocks数据
            blocks.value = res.data.blocks.slice(1)
            console.log('blocks.value :', blocks.value)

            //组装block需要的数据   登录后可能顺序随机打乱
            blockObject.value = {
                HOMEPAGE_BLOCK_PLAYLIST_RCMD: null,
                HOMEPAGE_BLOCK_STYLE_RCMD: null,
                HOMEPAGE_BLOCK_TOPLIST: null,
                HOMEPAGE_BLOCK_MGC_PLAYLIST: null,
                HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG: null
            }
            blocks.value.forEach(item => {
                console.log('item :', item)
                if (item.blockCode === "HOMEPAGE_BLOCK_PLAYLIST_RCMD") {
                    blockObject.HOMEPAGE_BLOCK_PLAYLIST_RCMD = {
                        blockCode: item.blockCode,
                        creatives: item.creatives,
                        uiElement: item.uiElement
                    }
                }
                if (item.blockCode === "HOMEPAGE_BLOCK_STYLE_RCMD") {
                    blockObject.HOMEPAGE_BLOCK_STYLE_RCMD = {
                        blockObject: item.blockCode,
                        creatives: item.creatives,
                        uiElement: item.uiElement
                    }
                }
                if (item.blockCode === 'HOMEPAGE_BLOCK_TOPLIST') {
                    blockObject.HOMEPAGE_BLOCK_TOPLIST = {
                        blockObject: item.blockCode,
                        creatives: item.creatives,
                        uiElement: item.uiElement
                    }
                }
            });
            console.log('blockObject :', blockObject)
        }).catch(err => console.log('err :', err))

        return {
            banners,
            blocks,
            blockObject
        }
    }
}
</script>
<style lang="less" scoped>
#DiscoverPage {
    #Content {
        height: 100vh;
        width: 100vw;
        overflow-y: scroll !important;
        overflow-x: scroll;

        #BlockWrapper {
            width: 100vw;
            margin-top: 10px;
            box-sizing: border-box;
            position: relative;
            box-shadow: 0px 1px 1px #88888823;
            margin-bottom: 200px;
        }
    }
}
</style>