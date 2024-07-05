<template>
    <div :class="{'input-wrapper':true, 'input-wrapper__active': focusStatus === 'focus'}">
        <div class="prepend">
            <i class="iconfont icon-search"></i>
        </div>
        <input
            type="text"
            class="input"
            :value="modelValue"
            :placeholder="placeholder"
            @input="$emit('update:modelValue', $event?.target.value)"
            @focus="handleFocus('focus')"
            @blur="handleFocus('blur')"
            />
        <div class="append"></div>
    </div>
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue';
const props = defineProps({
  modelValue: String,
  placeholder: String
});
const emits = defineEmits(['update:modelValue']);

const focusStatus = ref('blur')
const handleFocus = (status) => {
    focusStatus.value = status
}
</script>

<style lang="less" scoped>
.input-wrapper {
    position: relative;
    display: flex;
    border: 1px solid var(--theme-border-color);
    width: 200px;
    height: 28px;
    border-radius: 14px;
    
    .input {
        padding: 0;
        border: none;
        background: #00000000;
        width: 100%;
        padding: 0 30px;
        color: var(--theme-color);
        caret-color: var(--theme-color);
    }
    .input:focus {
        outline: none;
        border: none;
    }

    input::placeholder {
        letter-spacing: 1px;
        opacity: 0.8;
    }
    .prepend {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 30px;
        text-align: center;
        line-height: 28px;
        color: var(--theme-color);
    }
    &__active {
        background: #ffffff10;
        border-color: var(--theme-border-active-color);
    }
    
}

    
</style>