<script setup lang="ts">
const { title, content, top, right, bottom, left } = defineProps<{
    title: string
    content: string
    icon?: Element
    top?: string
    right?: string
    bottom?: string
    left?: string
}>()
</script>
<template>
    <div class="card-container" :style="{ top, right, bottom, left }">
        <div class="icon-container">
            <div class="icon">
                <slot></slot>
            </div>
        </div>
        <div class="write-up">
            <h2 class="title">{{ title }}</h2>
            <span class="content">{{ content }}</span>
        </div>
    </div>
</template>
<style scoped>
.card-container {
    position: absolute;
    top: v-bind(top);
    right: v-bind(right);
    bottom: v-bind(bottom);
    left: v-bind(left);
    display: flex;
    align-items: center;
    height: 16.5%;
    width: 29%;
    background-color: #f1f6f6;
    border: 2px solid #fbfdfd;
    border-radius: 20px;
}

.icon-container {
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    width: 27%;
    /* background-color: coral; */
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5.2em;
    height: 5.2em;
    background-image: url(../assets/feature_2_icon_bg_transparent.png);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100%;
}

.write-up {
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    /* background-color: #fff; */
    padding-right: 2.5em;
    align-self: flex-start;
    margin-top: 2.2em;
}

.write-up .title {
    color: #17293b;
    font-size: 1.65rem;
}

.write-up .content {
    font-size: 0.82rem;
    line-height: 1.65;
}
</style>
