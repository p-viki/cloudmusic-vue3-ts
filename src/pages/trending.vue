<template>
    <div class="trend-wrapper">
        <swiper
            swiperId="trending-top"
            width="500"
            height="200"
        >
            <div class="swiper-item">
                <div class="swiper-item-content">111</div>
            </div>
            <div class="swiper-item">
                <div class="swiper-item-content">222</div>
            </div>
            <div class="swiper-item">
                <div class="swiper-item-content">333</div>
            </div>
            <div class="swiper-item">
                <div class="swiper-item-content">444</div>
            </div>
            <div class="swiper-item">
                <div class="swiper-item-content">555</div>
            </div>
        </swiper>
    </div>
</template>

<script setup>
import swiper from "../components/Swiper/index.vue";
</script>

<style lang="less" scoped>
.trend-wrapper {
    min-height: 100%;
    .swiper-item-content {
        width: 100%;
        height: 100%;
        background: #ffffff17;
        border-radius: 16px;
    }
}
</style>