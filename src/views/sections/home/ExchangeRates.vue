<script setup lang="ts">
import { ref } from 'vue'
import IconPlanet1 from '@/components/icons/IconPlanet1.vue'
import { matches425, matches700, matches768 } from '@/composables/MatchMedia'

const activeIndex = ref<number>(0)

const handleClick = (index: number) => {
    activeIndex.value = index
}

const isActive = (index: number): boolean => index === activeIndex.value
</script>
<template>
    <section :style="{ backgroundColor: matches768 ? '#F1F2F2' : undefined }">
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
    left: 25%;
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
    background-color: v-bind('matches768 ? "#EAEFEE" : "#f8fcfb"');
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
    background-color: v-bind('matches768 ? "#E1ECEA" : "#edf7f5"');
    border-radius: 20px;
    transition: left 0.3s;
}

.table-container {
    height: v-bind('(5 * (matches425 ? 8 : matches700 ? 10 : 12)) + "vh"');
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
    border-bottom: v-bind('`1px solid ${ matches768 ? "#E5E6E6" : "#f2f2f2"}`');
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

@media all and (min-width: 2560px) {
}

@media all and (max-width: 1880px) {
    #planet-1 {
        top: 6%;
        left: 15%;
    }
}

@media all and (max-width: 1700px) {
    tr > * {
        padding-left: 6em;
    }
}

@media all and (max-width: 1500px) {
    tr > * {
        padding-left: 5em !important;
    }
}

@media all and (max-width: 1440px) {
    table {
        font-size: 1.5rem;
    }
}

@media all and (max-width: 1300px) {
    #planet-1 {
        transform: scale(3);
    }

    .title {
        font-size: 2.5rem;
    }

    .tab-header .content {
        font-size: 1.5rem;
    }

    table {
        font-size: 1.3rem;
    }
}

@media all and (max-width: 1200px) {
    .tab-header {
        width: 30%;
    }
}

@media all and (max-width: 1024px) {
    #planet-1 {
        transform: scale(2);
    }

    .title {
        font-size: 2rem;
        margin-bottom: 0;
    }

    .sub-title {
        font-size: 1rem;
    }

    .container {
        margin-top: 2em;
    }

    .tab-header-container {
        height: 12vh;
    }

    .tab-header .content {
        font-size: 1.4rem;
    }

    table {
        font-size: 1.2rem;
    }

    .percentage-change {
        font-size: 0.95rem;
        left: 1rem;
    }
}

@media all and (max-width: 900px) {
    .container {
        padding: 0 3em;
    }

    .tab-header .content {
        font-size: 1.2rem;
    }

    table {
        font-size: 1rem;
    }
}

@media all and (max-width: 768px) {
    .container {
        padding: 0;
    }
}

@media all and (max-width: 700px) {
    .title {
        font-size: 1.5rem;
    }

    .sub-title {
        font-size: 0.9rem;
    }

    .tab-header {
        width: 100%;
    }

    .tab-header .content {
        font-size: 1rem;
    }

    .active-tracker {
        width: v-bind(100/3 + '%');
    }

    tr {
        height: 10vh;
    }

    tr > * {
        padding-left: 3em !important;
    }
}

@media all and (max-width: 540px) {
    #planet-1 {
        transform: scale(1.5);
        top: 3%;
    }

    .tab-header-container {
        height: 10vh;
    }

    table {
        font-size: 0.9rem;
    }

    .percentage-change {
        font-size: 0.85rem;
        left: 0.9rem;
    }
}

@media all and (max-width: 480px) {
    #planet-1 {
        transform: scale(1);
        top: 3%;
    }

    .title {
        margin-top: 3rem;
        font-size: 1.2rem;
    }

    .sub-title {
        font-size: 0.8rem;
    }

    .active-tracker {
        border-radius: 10px;
    }

    .percentage-change {
        font-size: 0.7rem;
    }
}

@media all and (max-width: 425px) {
    .tab-header .content {
        font-size: 0.85rem;
    }

    tr {
        height: 8vh;
    }

    table {
        font-size: 0.75rem;
    }
}

@media all and (max-width: 375px) {
    .title {
        font-size: 1rem;
    }

    .sub-title {
        font-size: 0.65rem;
    }

    .tab-header-container {
        height: 8vh;
    }

    .tab-header .content {
        font-size: 0.75rem;
    }

    table {
        font-size: 0.65rem;
    }

    .percentage-change {
        font-size: 0.5rem;
    }
}
</style>
