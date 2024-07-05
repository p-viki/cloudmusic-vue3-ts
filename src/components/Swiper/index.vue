<template>
    <div :id="swiperId" class="swiper-wrapper" :style="computedStyle">
        <div ref="swiperContent" :class="{'swiper-content': true, 'swiper-content__nodrog': !isDragging}" :style="computedContentStyle" draggable>
            <slot></slot>
        </div>
        <div class="swiper-handle swiper-handle__pre" @click="changeIndex(-1)"></div>
        <div class="swiper-handle swiper-handle__next" @click="changeIndex(1)"></div>
        <div class="swiper-pagination">

        </div>
    </div>
</template>

<script setup>
import { computed, defineEmits, defineProps, onMounted, ref } from 'vue';
const props = defineProps({
    swiperId: {
        type: String,
        required: true
    },
    width: {
        type: String,        
    },
    height: {
        type: String,        
    },
    direction: {
        type: String,
        required: false,
        default() {
            return 'horizon'
        }
    },
    autoplay: {
        type: Boolean,
        default() {
            return true
        }
    },
    duration: {
        type: Number,
        default() {
            return 4000
        }
    },
    draggable: {
        type: Boolean,
        default() {
            return false
        }
    }
});

const computedStyle = computed(() => {
    return {
        width: props.width ? props.width + 'px' : '100%',
        height: props.height + 'px',
    }
})
const computedContentStyle = computed(() => {
    return {
        'flex-direction': props.direction === 'horizon' ? 'row' : 'column'
    }
})

const activeIndex = ref(0)
const itemLength = ref(0)
const swiperContent = ref(null)
const beforeOffset = ref(0)
const changeIndex = (step) => {
    console.log(activeIndex.value === itemLength.value);
    if ((activeIndex.value === 0 && step < 0) || (activeIndex.value === itemLength.value - 1 && step > 0)) {
        return
    }
    activeIndex.value = activeIndex.value + step
    swiperContent.value.style.transform = `translate(-${activeIndex.value * props.width}px)`
    beforeOffset.value = -activeIndex.value * props.width
}

const isDragging = ref(false);
const startX = ref(0)
const autoplayTimer = ref(null)

const initSwiper = () => {
    const swiper = document.getElementById(props.swiperId)
    const content = swiper.getElementsByClassName('swiper-content')[0]
    const items = content.getElementsByClassName('swiper-item')
    const pagination = swiper.getElementsByClassName('swiper-swiper')[0]

    itemLength.value = items.length
    content.style.width = `${items.length * props.width}px`

    for(let item of items) {  
        item.style = `
            width: ${props.width ? props.width + 'px' : '100%'};
            height: ${props.height + 'px'};
            display: flex;
            justify-content: center;
            align-items: center; 
            flex-shrink: 0;
        `
    }

    if (props.autoplay) {
        autoplayTimer.value = setInterval(() => {
            changeIndex(1)
        }, props.duration)
    }
    if (props.draggable) {
        swiperContent.value.addEventListener('mousedown', (event) => {
        isDragging.value = true
        startX.value = event.clientX - swiperContent.value.offsetLeft
        
        const onMouseMove = (event) => {
            if (!isDragging.value) return;
            const x = event.clientX - startX.value;
            
            swiperContent.value.style.transform = `translate(${beforeOffset.value + x}px)`
        }
        const onMouseUp = (event) => {
            isDragging.value = false;
            const x = event.clientX - startX.value;
            if (x < -50) {
                changeIndex(1)
            }
            if(x > 50) {
                changeIndex(-1)
            }
            
            swiperContent.value.style.transform = `translate(${beforeOffset.value}px)`
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        
    })
    }
}



onMounted(() => {
    initSwiper()
})
</script>

<style lang="less" scoped>
.swiper {
    
    &-wrapper {
        overflow: hidden;
        position: relative;
        
    }
    &-content {
        display: flex;
        cursor: grab;
        
    }
    &-content__nodrog{
        transition: transform 0.5s linear;
    }
    &-handle {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background: #0000003f;
        top: 50%;
        transform: translate(0, -25px);
        cursor: pointer;
        &__pre {
            left: 10px;
        }
        &__next {
            right: 10px;
        }
    }
    
}
</style>