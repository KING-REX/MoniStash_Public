<script setup lang="ts">
import { ref } from 'vue'
import IconCardLine from './icons/IconCardLine.vue'
import IconPlanet3 from './icons/IconPlanet3.vue'
import type Writeup from '@/composables/Writeup'

const width = ref(window.innerWidth)

window.onresize = () => {
    width.value = window.innerWidth
}

const props = defineProps<Writeup>()
</script>
<template>
    <div class="container">
        <IconCardLine class="line" />
        <div class="write-up-container">
            <h3 class="title">{{ title }}:</h3>
            <span class="content">{{ content }}</span>
        </div>
        <IconPlanet3 class="planet" />
    </div>
</template>
<style scoped>
.container {
    position: relative;
    flex-shrink: 0;
    /* width: 40vw !important; */
    width: v-bind(((40 / 100) * width) + 'px') !important;
    height: 33vh;
    border-radius: 25px;
    box-shadow: 0 15px 20px 5px #00000016;
    overflow: hidden;
}

.line {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) scale(1.4);
}

.write-up-container {
    padding: 5.5em 5em 0 4em;
    height: 100%;
}

.title {
    margin-bottom: 0.3em;
    font-size: 1.4rem;
    color: #17293b;
}

.content {
    font-size: 1.2rem;
    line-height: 1.7;
}

.planet {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: scale(1.3);
    transform-origin: 100% 100%;
}

@media all and (max-width: 1880px) {
    .container {
        width: 45em;
    }

    .write-up-container {
        padding-top: 4em;
    }

    .content {
        font-size: 1rem;
    }
}
</style>
