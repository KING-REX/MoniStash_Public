<script setup lang="ts">
import { ref } from 'vue'
import IconPlanet1 from './icons/IconPlanet1.vue'

const activeIndex = ref<number>(0)

const handleClick = (index: number) => {
    activeIndex.value = index
}

const isActive = (index: number): boolean => index === activeIndex.value
</script>
<template>
    <section>
        <IconPlanet1 id="planet-1" class="shape" />
        <h1 class="title">Explore our exchange rates and fees</h1>
        <span class="sub-title">Trade bitcoin and other crypto with our affordable rate</span>
        <div class="container">
            <div class="tab-header-container">
                <span class="tab-header" :class="{ active: isActive(0) }" @click="handleClick(0)">
                    <span class="content"> Exchange Rates </span>
                </span>
                <span class="tab-header" :class="{ active: isActive(1) }" @click="handleClick(1)">
                    <span class="content"> Deposit Fees </span>
                </span>
                <span class="tab-header" :class="{ active: isActive(2) }" @click="handleClick(2)">
                    <span class="content"> Withdrawal Fees </span>
                </span>
                <span class="active-tracker"></span>
            </div>
            <div class="table-container">
                <table :class="{ active: activeIndex != 1 }">
                    <thead>
                        <tr>
                            <th>Asset</th>
                            <th>Buying at</th>
                            <th>Selling at</th>
                        </tr>
                    </thead>
                    <tbody :class="{ active: isActive(0) }">
                        <tr>
                            <td class="coin">
                                BTC
                                <span class="percentage-change" :style="{ color: '#35C081' }"
                                    >+2.05%</span
                                >
                            </td>
                            <td class="buy-rate">NGN 500/USD</td>
                            <td class="sell-rate">NGN 700/USD</td>
                        </tr>
                        <tr>
                            <td class="coin">
                                ETH
                                <span class="percentage-change" :style="{ color: '#FB9600' }"
                                    >+2.05%</span
                                >
                            </td>
                            <td class="buy-rate">NGN 500/USD</td>
                            <td class="sell-rate">NGN 700/USD</td>
                        </tr>
                        <tr>
                            <td class="coin">
                                CAD
                                <span class="percentage-change" :style="{ color: '#FF003D' }"
                                    >-1.05%</span
                                >
                            </td>
                            <td class="buy-rate">NGN 500/USD</td>
                            <td class="sell-rate">NGN 700/USD</td>
                        </tr>
                        <tr>
                            <td class="coin">
                                FTM
                                <span class="percentage-change" :style="{ color: '#FB9600' }"
                                    >+1.05%</span
                                >
                            </td>
                            <td class="buy-rate">NGN 500/USD</td>
                            <td class="sell-rate">NGN 700/USD</td>
                        </tr>
                    </tbody>
                    <tbody :class="{ active: isActive(2) }">
                        <tr class="withdrawal">
                            <td class="coin">
                                USDT
                                <span class="percentage-change" :style="{ color: '#35C081' }">
                                    +2.05%
                                </span>
                            </td>
                            <td class="buy-rate">NGN 1/USD</td>
                            <td class="sell-rate">NGN 1/USD</td>
                        </tr>
                    </tbody>
                </table>
                <span :class="{ active: isActive(1) }">All our deposits are FREE</span>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 100vh; */
}

.title {
    margin: 5rem 0 1.5rem;
    font-size: 2.8rem;
    font-weight: bold;
}

.sub-title {
    font-size: 1.3rem;
    color: #00000066;
}

.shape {
    position: absolute;
    transform-origin: 0 0;
    transform: scale(4);
}

#planet-1 {
    top: 8.5%;
    left: 25.8%;
}

.container {
    margin-top: 3em;
    padding: 0 5em;
    width: 100%;
}

.tab-header-container {
    position: relative;
    display: flex;
    justify-content: space-around;
    height: 16vh;
    background-color: #f8fcfb;
    border-radius: 12px;
}

.tab-header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    z-index: 1;
    transition: color 0.2s;
    cursor: pointer;
}

.tab-header .content {
    font-size: 1.7rem;
    font-weight: 500;
}

.tab-header.active .content {
    color: var(--color-primary);
    font-weight: 600;
}

.active-tracker {
    position: absolute;
    top: 12.5%;
    left: v-bind((1.5 + (activeIndex * 33)) + '%');
    width: 30%;
    height: 75%;
    background-color: #edf7f5;
    border-radius: 20px;
    transition: left 0.3s;
}

.table-container {
    height: v-bind(5 * 12 + 'vh');
    overflow: hidden;
}

table {
    display: block;
    width: 100%;
    font-size: 1.7rem;
    opacity: 0;
    height: 0;
    transition: opacity 0.5s;
}

table.active {
    opacity: 1;
    height: 100%;
}

thead {
    display: block;
    width: 100%;
}

tbody {
    display: block;
    height: 0;
    opacity: 0;
    transition: opacity 0.5s;
    overflow: hidden;
}

tbody.active {
    height: initial;
    opacity: 1;
}

tr {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    height: 12vh;
}

tbody tr:last-of-type {
    border: none;
}

tr > * {
    padding-left: 8em;
}

tr > *:first-of-type {
    padding-left: 6em;
}

th {
    text-align: start;
}

.percentage-change {
    font-size: 1.1rem;
    position: relative;
    bottom: 0.5rem;
    left: 2rem;
}

.table-container > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #000000cc;
    opacity: 0;
    transition: opacity 0.5s;
}

.table-container > span.active {
    height: 100%;
    opacity: 1;
}
</style>
