<template>
    <div class="home-wrapper">
        <MenuSide></MenuSide>
        <div class="home-content">
            <NavBar></NavBar>
            <div class="content">
            <router-view v-slot="{ Component }">
                <transition name="move" mode="out-in">
                    <keep-alive>
                        <component :is="Component"></component>
                    </keep-alive>
                </transition>
            </router-view>
            </div>
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
        box-sizing: border-box;
        width: 100%;
        .content {
            height: calc(100vh - 150px);
            overflow: auto;
            
        }
        .content::-webkit-scrollbar {
            width: 10px;
            height: 10px;
            background-color: #8f8f8f00;
        }
        .content::-webkit-scrollbar-thumb {
            width: 10px;
            height: 10px;
            border-radius: 10px;
            background: #7e7e7e;
        }
        .content::-webkit-scrollbar-track {
            border-radius: 10px;
            background-color: #8f8f8f2f;
        }
    }
}
</style>