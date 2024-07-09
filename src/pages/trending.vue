<template>
    <div class="trend-wrapper">
        <div class="feature">
            <div class="feature-content">
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
                <div class="recent-block"></div>
            </div>
        </div>
        <div class="feature">
            <h3>精选推荐</h3>
            <div class="feature-content">
                <div class="feature-item">
                    <div class="feature-item-cover"></div>
                </div>
                <div class="feature-item">
                    <div class="feature-item-cover"></div>
                </div>
                <div class="feature-item">
                    <div class="feature-item-cover"></div>
                </div>
                <div class="feature-item">
                    <div class="feature-item-cover"></div>
                </div>
            </div>
        </div>
        <div class="feature">
            <h3>推荐歌单</h3>
            <div class="feature-content">
                <div class="feature-item"></div>
                <div class="feature-item"></div>
                <div class="feature-item"></div>
                <div class="feature-item"></div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import swiper from "../components/Swiper/index.vue";
</script>

<style lang="less" scoped>
h3 {
    color: var(--theme-color);
}
.trend-wrapper {
    min-height: 100%;
    padding: 16px 32px;
    .swiper-item-content {
        width: 100%;
        height: 100%;
        background: #ffffff17;
        border-radius: 16px;
    }
    .feature {
        margin: 20px 0;
        
        &-content {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .recent-block {
                width: 400px;
                height: 200px;
                border-radius: 20px;
                background: #000;
            }
        }
        &-item {
            width: 220px;
            height: 280px;
            border-radius: 20px;
            background: #000;
            overflow: hidden;
            &-cover {
                width: 100%;
                height: 100%;
                background: linear-gradient(to top,  #929292af 0%,  #ffffff11 100%);
                border-radius: 20px;
                transform: scale(2) translateY(60px);
                transition: all 0.4s linear;
                opacity: 0;
            }
            &-cover:hover {
                transform: translateY(0);
                // animation: cover-up 0.5s linear;
                opacity: 1;
            }
            &:hover {
                &-cover {
                    transform: translateY(100%);
                }
            }

        }

    }
}
@keyframes cover-up {
    0% {
        transform: translateY(100%);
        
    }
    100% {
        transform: translateY(0);
        
    }
}
</style>