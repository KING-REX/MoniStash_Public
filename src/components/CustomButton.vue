<script setup lang="ts">
import type { StyleValue } from 'vue'

interface CustomButtonProps {
    title: string
    fill?: boolean
    type?: 'link' | 'button'
    onclick?: (event: MouseEvent) => void
    textColor?: string
    textStyle?: StyleValue
    containerStyle?: StyleValue
    classes?: string
    textClass?: string
    linkHref?: string
}
const props = withDefaults(defineProps<CustomButtonProps>(), { type: 'button' })
</script>
<template>
    <button
        :style="containerStyle"
        v-if="props.type === 'button'"
        @click.stop.prevent="props.onclick"
        :class="'btn ' + (classes ?? '')"
    >
        <span :class="textClass" :style="textStyle">{{ title }}</span>
        <slot></slot>
    </button>
    <a
        :style="containerStyle"
        v-else
        @click="props.onclick"
        :class="'btn ' + (classes ?? '')"
        :href="linkHref"
    >
        <span :class="textClass" :style="textStyle">{{ title }}</span>
        <slot></slot>
    </a>
</template>
<style scoped>
.btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 45%;
    font-size: 1rem;
    background-color: v-bind("props.fill ? 'var(--color-primary)' : 'transparent'");
    color: v-bind('textColor');
    border: 1px solid var(--color-primary-33);
    border-radius: 5px;
    cursor: pointer;
}

button {
    outline: none;
    border: none;
}
</style>
