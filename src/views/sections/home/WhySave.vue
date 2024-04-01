<script setup lang="ts">
import FeatureCard from '@/components/FeatureCard.vue'
import { ref } from 'vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import IconChevronLeft from '@/components/icons/IconChevronLeft.vue'
import type Writeup from '@/composables/Writeup'

const data: Writeup[] = [
    {
        title: 'High Monthly Return',
        content:
            'MoniStash has a high monthly return on your savings. Earn up to 3% when you save with us.'
    },
    {
        title: 'Consistent Return on Savings',
        content:
            'MoniStash partnered with top leading exchanges as a P2PP merchant. We trade both offline and online on stable coins which yield interest on your savings.'
    },
    {
        title: 'No Hiding Charges',
        content:
            'No charges on your savings. Every transaction is transparent from deposit to withdraw.'
    },
    {
        title: 'Financial Stability',
        content:
            'Saving in a stable currency can provide a sense of financial stability and peace of mind. Knowing that your savings are protected against inflation allows you to have confidence in your financial future and plan for long-term goals with more certainty.'
    }
]

const activeIndex = ref<number>(0)

const isActive = (index: number): boolean => activeIndex.value === index

const elementMargin = ref<number>(0)

const getMargin = () => {
    let value = elementMargin.value + 'em'
    console.log('Margin is: ' + value)
    return value
}

const reduceActiveIndex = () => {
    elementMargin.value += 55
    activeIndex.value--
}

const increaseActiveIndex = () => {
    elementMargin.value -= 55
    activeIndex.value++
}
</script>
<template>
    <section>
        <h1 class="title">Why Save with <span class="monistash">MoniStash?</span></h1>
        <div class="extra">
            <span><strong>3% monthly interest</strong> when you save with us.</span>
        </div>
        <div class="slider">
            <div class="card-container">
                <FeatureCard
                    v-for="(datum, index) in data"
                    :key="index"
                    :title="datum.title"
                    :content="datum.content"
                    :class="{ active: isActive(index) }"
                    class="feature-card"
                />
            </div>
            <div class="action-controls">
                <button
                    class="left action-control"
                    :disabled="activeIndex === 0"
                    @click="reduceActiveIndex"
                >
                    <IconChevronLeft />
                </button>
                <button
                    class="right action-control"
                    :disabled="activeIndex === 2"
                    @click="increaseActiveIndex"
                >
                    <IconChevronRight />
                </button>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    height: 70vh;
}

.title {
    margin: 3rem 0 1.5rem;
    font-size: 3rem;
    font-weight: 500;
    color: #17293b;
    text-align: center;
}

.monistash {
    font-style: italic;
    font-weight: 600;
    color: var(--color-primary);
}

.extra {
    margin-bottom: 3rem;
    text-align: center;
}

.extra span {
    padding: 0.3em 2em;
    font-style: italic;
    font-size: 1.3rem;
    background-color: #fffaf6;
    border: 2px solid #fff2e6;
    border-radius: 25px;
}

.extra span strong {
    font-weight: 500;
}

.card-container {
    display: flex;
    padding: 0 5rem;
    gap: 5em;
}

.card-container .feature-card {
    transition: margin-left 0.5s;
}

.card-container .feature-card:first-of-type {
    margin-left: v-bind(getMargin());
}

.action-controls {
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-top: 4em;
}

.action-control {
    position: relative;
    padding: 1em 2em;
    background-color: #fff;
    border: 0;
    border-radius: 10px;
    outline: 0;
    box-shadow: 0 5px 10px 0 #00000033;
    cursor: pointer;
    transition: transform 0.2s;
}

.action-control:hover {
    transform: translateY(-5%);
}

.action-control::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 150%;
    /* background-color: purple; */
    pointer-events: none;
}
</style>
