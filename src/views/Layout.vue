<template>
    <div class="container">
        <div class="outer">
            <p><Home /></p>
            <p><User /></p>
            <p>3</p>
            <p>4</p>
        </div>
    </div>
</template>
<script>
import Home from './Home/index.vue';
import User from './User/idnex.vue'
export default {
    name:'Layout',
    components:{
        Home,
        User
    }
}
</script>
<style lang="less" scoped>
.container{
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
}
.outer{
    background-color: #f5f5f5;
    height: 100%;
    width: 420vw;
    display: flex;
    flex-direction: row;
}
.outer::after{
    content:"没有更多了🤗";
    font-size: 0.16rem;
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
}
.outer > p {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    width: 100vw;
    height: 100%;
    background-color: #eee;
    text-align: center;
    line-height: 100vh;
    font-weight: 900;
    font-size: 0.16rem;
    >div{
        height: 100%;
        width: 100%;
    }
}
</style>