<script setup lang="ts">
import CustomButton from './CustomButton.vue'
import IconRightArrow from './icons/IconRightArrow.vue'
const { multiple, noLetterSpacing } = defineProps<{
    multiple?: number
    noLetterSpacing?: boolean
    classes?: string
    textClass?: string
}>()
</script>
<template>
    <CustomButton
        class="get-started"
        :class="classes"
        title="Get Started"
        :fill="true"
        text-color="#fff"
        type="button"
        :text-style="{
            fontWeight: '600',
            letterSpacing: `${noLetterSpacing ? 'unset' : '.08em'}`,
            fontSize: `${1 * (multiple ?? 1)}rem`
        }"
        :textClass="textClass"
    >
        <IconRightArrow class="icon" />
    </CustomButton>
</template>
<style scoped>
.get-started {
    height: v-bind('3.5 * (multiple ?? 1) + "rem"');
    width: v-bind('12 * (multiple ?? 1) + "rem"');
    gap: v-bind('1 * (multiple ?? 1) + "rem"');
}

.icon {
    transform: v-bind('`scale(${1 * (multiple ?? 1)})`');
}
</style>
