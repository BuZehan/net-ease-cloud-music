<template>
    <div class="discovering-top">
        <div class="wrapper">
            <i  class="iconfont icon-gengduo liebiao"></i>
            <div id="Center">
                <i class="iconfont icon-sousuo1"></i>
                <input class="discovering-input" type="text" />
            </div>
            <i  class="iconfont icon-yinle music"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "DiscoveringTop",
}
</script>

<style lang="less" scoped>
.discovering-top {
    width: 100vw;
    height: 0.4rem;
    position: relative;

    #Center {
        position: relative;

        i {
            position: absolute;
            display: inline-block;
            z-index: 10;
            top: 50%;
            transform: translateY(-50%);
            left: 8px;
            color: #888;
            opacity: 0.5;
        }

        .discovering-input {
            width: 2.7rem;
            height: 26px;
            max-height: 30px;
            border-radius: 0.5rem;
            padding: 0.05rem 0.1rem;
            padding-left: 0.3rem;
            opacity: .8;
        }
    }

    .liebiao,
    .music {
        padding-left: 0.04rem;
    }

    .music {
        padding-right: 0.04rem;
    }

    .wrapper {
        display: flex;
        height: 100%;
        padding: 0.1rem 0.07rem;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        background-color: #FFDEE9;
        background-image: linear-gradient(180deg, #FFDEE9 100%);

    }
}
</style>