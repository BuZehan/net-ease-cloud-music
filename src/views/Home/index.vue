<template>
    <div id="HomePage">
        page-Home
    </div>
</template>
<script>
import homeTop from './components/home-top.vue'
import HomeTop from './components/home-top.vue'
export default {
  components: { homeTop },
    name: 'Home'
}
</script>
<style lang="less">
#HomePage {
    position: relative;
}

.home-top {
    position: fixed;
    top: 0;
}
</style>