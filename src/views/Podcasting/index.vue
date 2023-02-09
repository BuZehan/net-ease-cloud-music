<template>
    <div>
        <!-- 路由出口 -->
        <router-view name="Podcasting" v-slot="{ Component }">
            <transition name="Fade">
                <component :is="Component" />
            </transition>
        </router-view>
        
        <router-link to="/view">跳转</router-link>
    </div>
</template>
<script>
export default {
    name: 'Podcasting'
}
</script>
<style lang="less" scoped>

</style>