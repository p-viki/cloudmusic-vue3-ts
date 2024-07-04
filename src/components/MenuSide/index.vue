<template>
    <div class="menu-wrapper">
        <div class="menu-top">
            CloudMusic
        </div>
        <div class="menu-content">
            <ul>
                <li :class="{'active': activeLitem.type === 'menu_top' && activeLitem.index === index}"  v-for="(item, index) in menu_top" :key="item.name" @click="hanleSelect('menu_top', index, item.path)">
                    <i class="iconfont icon-fire"></i>
                    {{ item.name }}
                </li>
            </ul>
            <ul>
                <li :class="{'active': activeLitem.type === 'menu_own' && activeLitem.index === index}" v-for="(item, index) in menu_own" :key="item.name" @click="hanleSelect('menu_own', index, item.path)">
                    {{ item.name }}
                </li>
            </ul>
            <ul>
                <li :class="{'active': activeLitem.type === 'list_own' && activeLitem.index === index}" v-for="(item, index) in list_own" :key="item.name" @click="hanleSelect('list_own', index, item.path)">
                    {{ item.name }}
                </li>
            </ul>
            <ul>
                <li :class="{'active': activeLitem.type === 'list_other' && activeLitem.index === index}" v-for="(item, index) in list_other" :key="item.name" @click="hanleSelect('list_other', index, item.path)">
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

const menu_top = ref([
    {
        name: '为我推荐',
        path: 'Trending'
    }
])

const menu_own = ref([
    {
        name: '我喜欢的',
        path: 'List'
    },
    {
        name: '最近播放',
        path: 'Trending'
    }
])

const list_own = ref([
    {
        name: '我喜欢的',
        path: 'Trending'
    },
    {
        name: '鸡血',
        path: 'Trending'
    },
])

const list_other = ref([
    {
        name: '说唱',
        path: 'Trending'
    },
    {
        name: '布鲁斯',
        path: 'Trending'
    }
])


const activeLitem = ref({
    type: '',
    index: 0
})
const hanleSelect = (type, index, path) => {
    activeLitem.value.type = type
    activeLitem.value.index = index
    router.push({
        name: path
    })
}
</script>

<style lang="less" scoped>
.menu {
    &-wrapper {
        position: absolute;
        left: 0;
        height: calc(100vh - 80px);
        width: 196px;
        background: rgba(255, 255, 255, 0.1);
        color: var(--theme-color)
    }
    
    &-top {
        height: 64px;
        font-size: 24px;
        font-weight: 600;
        line-height: 64px;
        text-align: center;
    }
    &-content {
        height: calc(100vh - 80px - 64px);
        overflow: auto;
        ul {
            padding: 0 16px 8px;
            li {
                margin: 8px 0;
                padding: 0 12px;
                height: 42px;
                line-height: 42px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 16px;
                .iconfont { 
                    font-size: 18px;
                }
            }
            li.active {
                background: var(--theme-active)!important;
            }
            li:hover {
                background: rgba(255, 255, 255, 0.1);
            }     
        }
    }
}
</style>