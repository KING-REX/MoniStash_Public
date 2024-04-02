<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import BaseComponent from './BaseComponent.vue'
import BuyStep1 from './BuyStep1.vue'

const buyHeaderRef = ref<HTMLSpanElement | null>(null)
const sellHeaderRef = ref<HTMLSpanElement | null>(null)

const active = ref<string>('buy')

let buyHeader: HTMLSpanElement | null = null
let sellHeader: HTMLSpanElement | null = null

onMounted(() => {
    buyHeader = document.getElementById('buy-header')
    sellHeader = document.getElementById('sell-header')
})

const switchActive = (direction: string) => {
    if (buyHeader && sellHeader) {
        if (direction === 'sell' && buyHeader.classList.contains('active')) {
            buyHeader.classList.remove('active')
            sellHeader.classList.add('active')
            active.value = 'sell'
        } else if (direction === 'buy' && sellHeader.classList.contains('active')) {
            sellHeader.classList.remove('active')
            buyHeader.classList.add('active')
            active.value = 'buy'
        }
    }
}

const buyStep = ref<number>(1)
const sellStep = ref<number>(1)
</script>
<template>
    <BaseComponent>
        <form class="trade-container" method="post" action="#">
            <div class="headers">
                <span
                    v-if="sellStep <= 1"
                    id="buy-header"
                    class="header active"
                    ref="buyHeaderRef"
                    @click="switchActive('buy')"
                >
                    Buy Crypto
                </span>
                <span
                    v-if="buyStep <= 1"
                    id="sell-header"
                    class="header"
                    ref="sellHeaderRef"
                    @click="switchActive('sell')"
                >
                    Sell Crypto
                </span>
            </div>
            <div class="content">
                <template v-if="active === 'buy'">
                    <BuyStep1
                        v-if="buyStep === 1"
                        :onclick="
                            (event) => {
                                buyStep++
                            }
                        "
                    />
                </template>
            </div>
        </form>
    </BaseComponent>
</template>
<style scoped>
.trade-container {
    background-color: #fff;
    width: 600px;
    padding: 0 10px;
    border-radius: 10px;
    height: fit-content;
    z-index: 10;
}
.trade-container .headers {
    display: flex;
    width: 100%;
    height: 60px;
}
.trade-container .headers .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    color: #b8b8b8;
    text-align: center;
    border-bottom: 2px solid #f2f2f2;
    cursor: pointer;
}
.trade-container .headers .header#buy-header.active {
    color: var(--color-primary);
    border-color: var(--color-primary);
    border-width: 2.5px;
}
.trade-container .headers .header#sell-header.active {
    color: #ff003d;
    border-color: #ff003d;
    border-width: 2.5px;
}
.trade-container .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px 0 40px;
}

.trade-container :deep(input::-webkit-outer-spin-button),
.trade-container :deep(input::-webkit-inner-spin-button) {
    -webkit-appearance: none;
    margin: 0;
}

.trade-container :deep(input[type='number']) {
    -moz-appearance: textfield;
}
</style>
