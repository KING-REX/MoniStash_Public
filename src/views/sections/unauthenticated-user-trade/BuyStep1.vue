<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue'
import CurrencyDropdown from '@/components/CurrencyDropdown.vue'
import CryptoDropdown from '@/components/CryptoDropdown.vue'
import { computed, ref } from 'vue'

/* Another method for the exchange rates fetching that involves fetching the rates initially and using them for a period of time, instead of fetching new rates oninput */
/*
let exchangeRates: { [key: string]: number } | null = null;

async function fetchExchangeRates(): Promise<void> {
    // Replace 'YOUR_API_KEY' with your actual API key or endpoint
    const apiKey = 'YOUR_API_KEY';
    const url = 'https://api.exchangeratesapi.io/latest?base=USD'; // Fetch exchange rates relative to USD

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
                // Add any other headers required by your API
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch exchange rates');
        }

        const data = await response.json();

        if (!data.rates) {
            throw new Error('Exchange rates not available');
        }

        exchangeRates = data.rates;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        throw error;
    }
}

async function convertToNaira(currency: string, amount: number): Promise<number> {
    if (!exchangeRates) {
        await fetchExchangeRates();
    }

    if (!exchangeRates || !exchangeRates.NGN) {
        throw new Error('Exchange rate for NGN not available');
    }

    const exchangeRate = exchangeRates[currency];
    if (!exchangeRate) {
        throw new Error(`Exchange rate for ${currency} not available`);
    }

    const nairaAmount = amount * exchangeRate;
    return nairaAmount;
}

// Example usage
async function main() {
    try {
        await fetchExchangeRates(); // Fetch exchange rates initially
        const amountInUsd = 100; // Example amount in USD
        const amountInNaira = await convertToNaira('USD', amountInUsd);
        console.log(`Equivalent amount in NGN: ${amountInNaira}`);
    } catch (error) {
        console.error('Error converting to NGN:', error);
    }
}

main();
*/

const amount = ref(0)

const currency = ref('')

// async function convertToNaira(currency: string, amount: number): Promise<number> {
//     // Replace 'YOUR_API_KEY' with your actual API key or endpoint
//     const apiKey = 'YOUR_API_KEY'
//     const url = `https://api.exchangeratesapi.io/latest?base=${currency}&symbols=NGN`

//     try {
//         const response = await fetch(url, {
//             headers: {
//                 Authorization: `Bearer ${apiKey}`
//                 // Add any other headers required by your API
//             }
//         })

//         if (!response.ok) {
//             // throw new Error('Failed to fetch exchange rates')
//         }

//         const data = await response.json()

//         if (!data.rates || !data.rates.NGN) {
//             // throw new Error('Exchange rate for NGN not available')
//         }

//         const exchangeRate = data.rates.NGN
//         const nairaAmount = amount * exchangeRate
//         return nairaAmount
//     } catch (error) {
//         console.error('Error fetching exchange rates:', error)
//         throw error
//     }
// }

function convertToNaira(currency: string, amount: number) {
    return 1312.5 * amount
}

function formatPrice(value: number) {
    let val = (value / 1).toFixed(2).replace(',', '.')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const convertedAmount = computed(() => formatPrice(convertToNaira(currency.value, amount.value)))

// Example usage
// async function main() {
//     try {
//         const amountInUsd = 100 // Example amount in USD
//         const amountInNaira = await convertToNaira('USD', amountInUsd)
//         console.log(`Equivalent amount in NGN: ${amountInNaira}`)
//     } catch (error) {
//         console.error('Error converting to NGN:', error)
//     }
// }

// main()

const { onclick } = defineProps<{ onclick?: (event: MouseEvent) => void }>()
</script>
<template>
    <div class="entry">
        <label for="crypto-coin">I want to buy</label>
        <!-- Crypto coins drop down -->
        <CryptoDropdown class="crypto-input" />
    </div>
    <div class="entry">
        <label for="amount">How much Crypto</label>
        <div class="amount-input">
            <input type="number" name="amount" id="amount" v-model="amount" />
            <CurrencyDropdown
                :onCurrencySelect="
                    (selectedCurrency: string) => {
                        currency = selectedCurrency
                    }
                "
            />
        </div>
        <!-- Crypto coins drop down -->
    </div>
    <div class="entry">
        <label for="naira-equivalent">Equivalent in Naira<span>(#)</span></label>
        <input
            type="text"
            name="naira-equivalent"
            id="naira-equivalent"
            disabled
            :value="convertedAmount"
        />
    </div>
    <div class="entry">
        <label for="crypto-address">
            Please enter the wallet address you want your <span id="coin-symbol">BTC</span> sent to
        </label>
        <input type="text" name="crypto-address" id="crypto-address" />
    </div>
    <div class="entry">
        <label id="network-label" for="network">Network&nbsp;<span class="required">*</span></label>
        <input type="text" name="network" id="network" />
    </div>
    <CustomButton
        title="Buy"
        fill
        :containerStyle="{ width: '100%', padding: '12px 0' }"
        textColor="#FFF"
        :onclick="onclick"
    />
</template>
<style scoped>
.entry {
    display: flex;
    flex-direction: column;
}
input {
    outline: none;
    border: none;
    font-size: 1rem;
}
.entry .amount-input,
.entry .crypto-input,
.entry > input {
    height: 40px;
    background-color: #f6fbfa;
    border: 1px solid #e8ecec;
    border-radius: 5px;
    padding-left: 15px;
}
.entry .amount-input {
    display: flex;
    padding-left: 0;
}
.entry .crypto-input {
    display: flex;
    padding-left: 0;
}
.entry .amount-input input {
    padding-left: 15px;
    width: 85%;
    height: 100%;
    background-color: transparent;
    border-right: 2px solid #aaadad;
}

.entry #network-label {
    display: flex;
}
.entry #network-label .required {
    padding-top: 3px;
    color: #ff003d;
}
</style>
