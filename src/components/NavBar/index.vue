<template>
    <div class="nav-wrapper">
        <section class="left">
            <nav-input v-model="keyword" placeholder="请输入"></nav-input>
        </section>
        <section class="right">
            <i class="iconfont icon-user"></i>
            <span>username</span>
            <i class="iconfont icon-setting"></i>
            <i class="iconfont icon-zhuti"></i>
        </section>
    </div>
</template>

<script setup>
import { ref } from "vue";
import NavInput from "../Input/NavInput.vue";

const keyword = ref('')
</script>

<style lang="less" scoped>
.nav-wrapper {
    width: 100%;
    height: 64px;
    padding: 0 32px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--theme-color);
    .left {
        
    }
    .right {
        width: 180px;
        display: flex;
        justify-content: space-between;
        line-height: 64px;
        span {
            margin-right: 20px;
            cursor: pointer;
        }
        .iconfont {
            font-size: 20px;
            cursor: pointer;
        }
        .iconfont:hover {
            color: var(--theme-hover-color);
        }
    }
}
</style>