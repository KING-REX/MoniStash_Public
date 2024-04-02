<template>
    <div class="currency-dropdown">
        <button @click.stop.prevent="toggleDropdown" class="dropdown-toggle">
            <img :src="selectedCurrencyFlag" alt="Selected Currency Flag" class="flag-icon" />
            {{ selectedCurrency }}
            <IconChevronRight class="right-arrow" />
        </button>
        <ul v-if="isOpen" class="dropdown-menu">
            <li
                v-for="currency in currencies"
                :key="currency.symbol"
                @click="selectCurrency(currency)"
            >
                <img :src="currency.flag" alt="Currency Flag" class="flag-icon" />
                {{ currency.symbol }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'
import IconChevronRight from './icons/IconChevronRight.vue'
import { currencyList } from '@/composables/CurrencyList.ts'

const props = defineProps<{ onCurrencySelect?: (currency: string) => void }>()

const currencies = ref(currencyList)

const selectedCurrency = ref(currencies.value[48].symbol)
const isOpen = ref(false)

const selectedCurrencyFlag = computed(() => {
    const currency = currencies.value.find((c) => c.symbol === selectedCurrency.value)
    return currency ? currency.flag : ''
})

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const selectCurrency = (currency: { symbol: string; flag: string }) => {
    selectedCurrency.value = currency.symbol
    isOpen.value = false
    props.onCurrencySelect && props.onCurrencySelect(currency.symbol)
}
</script>

<style scoped>
.currency-dropdown {
    position: relative;
    display: inline-block;
    height: 100%;
    width: 20%;
}

.dropdown-toggle {
    padding: 10px;
    padding-left: 6px;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border: 1px solid #ccc;
    cursor: pointer;
}

.dropdown-toggle img {
    width: 20px;
    /* height: 20px; */
    margin-right: 5px;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    height: 250px;
    width: 100%;
    overflow: auto;
    background-color: #ffffff;
    border: 1px solid #ccc;
    list-style: none;
    z-index: 1000;
}

.dropdown-menu li {
    padding: 10px !important;
    cursor: pointer;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
}

.dropdown-menu li:hover {
    background-color: #f6fbfa;
}

.flag-icon {
    width: 20px;
    /* height: 20px; */
    margin-right: 5px;
}

.right-arrow {
    position: absolute;
    right: 8px;
    color: var(--color-primary);
    transform: scale(0.9);
}
</style>
