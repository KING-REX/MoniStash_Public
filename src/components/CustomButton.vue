<script setup lang="ts">
import type { StyleValue } from 'vue'
import { type RouteLocationRaw } from 'vue-router'

interface CustomButtonProps {
    title: string
    fill?: boolean
    type?: 'link' | 'button' | 'router-link'
    onclick?: (event: MouseEvent) => void
    textColor?: string
    textStyle?: StyleValue
    containerStyle?: StyleValue
    textClass?: string
    linkHref?: string
    to?: RouteLocationRaw
}
const props = withDefaults(defineProps<CustomButtonProps>(), { type: 'button' })
</script>
<template>
    <button
        :style="containerStyle"
        v-if="props.type === 'button'"
        @click.stop.prevent="props.onclick"
        class="btn"
    >
        <span :class="textClass" :style="textStyle">{{ title }}</span>
        <slot></slot>
    </button>
    <a
        :style="containerStyle"
        v-else-if="props.type === 'link'"
        @click="props.onclick"
        class="btn"
        :href="linkHref"
    >
        <span :class="textClass" :style="textStyle">{{ title }}</span>
        <slot></slot>
    </a>
    <RouterLink
        :style="containerStyle"
        v-else-if="props.type === 'router-link' && props.to"
        @click="props.onclick"
        class="btn"
        :to="props.to"
    >
        <span :class="textClass" :style="textStyle">{{ title }}</span>
        <slot></slot>
    </RouterLink>
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
