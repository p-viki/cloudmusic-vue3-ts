<template>
    <div class="home-wrapper">
        <MenuSide></MenuSide>
        <div class="home-content">
            <NavBar></NavBar>
            <router-view v-slot="{ Component }">
                <transition name="move" mode="out-in">
                    <keep-alive>
                        <component :is="Component"></component>
                    </keep-alive>
                </transition>
            </router-view>
        </div>
        <PlayerBar></PlayerBar>
    </div>
</template>

<script setup lang="ts">
import MenuSide from "../components/MenuSide/index.vue"
import NavBar from "../components/NavBar/index.vue"
import PlayerBar from "../components/PlayerBar/index.vue"
</script>

<style lang="less" scoped>
.home-wrapper {
    height: 100vh;
    overflow: hidden;
    background: var(--theme-background);

    .home-content {
        padding-left: 196px;
        width: 100%;
    }
}
</style>