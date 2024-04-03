<script setup lang="ts">
import type { StyleValue } from 'vue'
import { RouteLocationRaw } from 'vue-router'

interface CustomRouterProps {
    title: string
    fill?: boolean
    type?: 'link' | 'button'
    onclick?: (event: MouseEvent) => void
    textColor?: string
    textStyle?: StyleValue
    containerStyle?: StyleValue
    classes?: string
    textClass?: string
    to: RouteLocationRaw
}

const props = withDefaults(defineProps<CustomRouterProps>(), { type: 'link' })
</script>
<template>
    <RouterLink :style="containerStyle" :to="to" @click="props.onclick">
        <span :class="textClass" :style="textStyle">{{ title }}</span>
    </RouterLink>
</template>
<style scoped></style>
