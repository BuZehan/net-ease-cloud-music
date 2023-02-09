<template>
    <div class="discovering-top">
        <div class="wrapper">
            <slot class="left" name="left"></slot>
            <slot></slot>
            <slot class="right" name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "DiscoveringTop"
}
</script>

<style lang="less" scoped>
.discovering-top {
    width: 100vw;
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
    height: 0.6rem;

    .wrapper {
        display: flex;
        height: 100%;
        padding: 0 0.07rem;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
    }
}
</style>