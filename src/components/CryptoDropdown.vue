<template>
    <div class="crypto-dropdown">
        <button @click.stop.prevent="toggleDropdown" class="dropdown-toggle">
            <img class="crypto-logo selected-logo" :src="selectedCrypto.logo" alt="Crypto Logo" />
            <span class="selected-name">{{ selectedCrypto.name }}</span>
            &nbsp;
            <span class="selected-symbol"> ({{ selectedCrypto.symbol }})</span>
        </button>
        <ul v-if="isOpen" class="dropdown-menu">
            <li
                v-for="crypto in cryptocurrencies"
                :key="crypto.symbol"
                @click="selectCrypto(crypto)"
            >
                <img :src="crypto.logo" alt="Crypto Logo" class="crypto-logo" />
                <span class="crypto-name">{{ crypto.name }}</span>
                &nbsp;
                <span class="crypto-symbol">({{ crypto.symbol }})</span>
            </li>
        </ul>
        <IconChevronRight class="right-arrow" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconChevronRight from './icons/IconChevronRight.vue'
import { cryptocurrencyList } from '@/composables/CryptocurrencyList.ts'

const cryptocurrencies = ref(cryptocurrencyList)

const isOpen = ref(false)

const selectedCrypto = ref(cryptocurrencies.value[0])

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const selectCrypto = (crypto: { name: string; symbol: string; logo: string }) => {
    selectedCrypto.value = crypto
    console.log(`Selected crypto: ${selectedCrypto.value.name} (${selectedCrypto.value.symbol})`)
    isOpen.value = false
}
</script>

<style scoped>
.crypto-dropdown {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
}

.dropdown-toggle {
    display: flex;
    align-items: center;
    padding-left: 15px;
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.dropdown-toggle:focus {
    outline: none;
}

.selected-name {
    font-weight: bold;
}

.crypto-symbol,
.selected-symbol {
    color: #c5c9c9;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 250px;
    overflow: auto;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 5px;
    list-style: none;
    z-index: 1000;
}

.dropdown-menu li {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
}

.crypto-logo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
}

.selected-logo {
    width: 20px;
    height: 20px;
}

.crypto-name {
    margin-left: 5px;
}

.right-arrow {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-primary);
}
</style>
