<template>
    <div>
        <!-- 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 -->
        <!-- 路由出口 -->
        <router-view name="Podcasting" v-slot="{ Component }">
            <transition name="Fade">
                <component :is="Component" />
            </transition>
        </router-view>
        
        <router-link to="/view">link</router-link>
    </div>
</template>
<script>
export default {
    name: 'Podcasting'
}
</script>
<style lang="less" scoped>

</style>