<template>
    <div class="player-wrapper">
        <section class="player-info">
            <div class="player-info-img"></div>
            <div class="player-info-content">
                <div class="song-name">
                    Lose Yourself - 
                    <span>
                        Eminem
                    </span>
                </div>
                <div class="song-handle">
                    <i class="iconfont icon-shoucangwenjianjia"></i>
                    <i class="iconfont icon-pinglun"></i>
                    <i class="iconfont icon-fenxiang"></i>
                    <i class="iconfont icon-shoucangwenjianjia"></i>
                </div>
            </div>
        </section>
        <section class="player-progress">
            <div class="player-progress-hanle">
                <i class="iconfont icon-heart"></i>
                <i class="iconfont icon-verticalright"></i>
                <i class="iconfont icon-timeout"></i>
                <i class="iconfont icon-verticalleft"></i>
                <i class="iconfont icon-suiji"></i>
            </div>
            <div class="player-progress-content">
                <span>00:00</span>
                <div class="progress">
                    <div class="progress-active"></div>
                </div>
                <span>05:12</span>
            </div>
        </section>
        <section class="player-other">
            <i class="iconfont icon-yinliang"></i>
            <i class="iconfont icon-gedan"></i>
        </section>
    </div>
</template>

<script setup lang='ts'>
    
</script>

<style lang="less" scoped>
.player {
    &-wrapper {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 80px;
        padding: 0 32px;
        box-sizing: border-box;
        background: var(--theme-light-background);
        color: var(--theme-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px -1px 5px 1px #dadada1c;
        .iconfont {
            cursor: pointer;
        }
        .iconfont:hover {
            color: var(--theme-hover-color);
        }
    }
    &-info {
        display: flex;
        &-img {
            width: 36px;
            height: 36px;
            border-radius: 28px;
            border: 10px solid #000;
            animation: rotate-animation 5s linear infinite;
        }
        &-content {
            margin-left: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .song-handle {
                margin-top: 8px;
                width: 100px;
                display: flex;
                justify-content: space-between;
                .iconfont {
                    font-size: 18px;
                }
            }
        }
    }
    &-progress {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &-hanle {
            width: 280px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .iconfont {
                font-size: 28px;
            }
            .icon-timeout {
                font-size: 42px;
            }
        }
        &-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .progress {
                position: relative;
                margin: 0 15px;
                width: 320px;
                height: 10px;
                border-radius: 10px;
                background: var(--theme-content-background);
                &-active {
                    position: absolute;
                    left: 0;
                    width: 200px;
                    height: 10px;
                    border-radius: 10px;
                    background: var(--theme-active);
                }
            }
            span {

            }
        }
    }
    &-other {
        width: 100px;
        display: flex;
        justify-content: space-around;
        .iconfont {
            font-size: 24px;
        }
    }
    
}

@keyframes rotate-animation {  
  0% {    
      transform: rotate(0deg);
  }  100% {    
      transform: rotate(180deg);
  }
}
</style>