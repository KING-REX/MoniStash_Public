<script setup lang="ts">
import FeatureTwoCard from './FeatureTwoCard.vue'
import IconCryptocurrency from './icons/IconCryptocurrency.vue'
import IconTransfer from './icons/IconTransfer.vue'
import IconSecurity from './icons/IconSecurity.vue'
import IconCryptoExchange from './icons/IconCryptoExchange.vue'
import { computed } from 'vue'
import IconPlanet1 from './icons/IconPlanet1.vue'
import IconAmoebaOutline5 from './icons/IconAmoebaOutline5.vue'
const data = [
    {
        title: 'Cryptocurrency',
        content:
            'A digital or virtual currency that uses cryptography to secure and verify financial transactions.',
        top: '13.5%',
        left: '29.7%',
        icon: IconCryptocurrency
    },
    {
        title: 'Transfer',
        content:
            'Crypto transfer is the process of sending or receiving digital currencies, from one digital wallet to another.',
        top: '37.5%',
        left: '67.4%',
        icon: IconTransfer
    },
    {
        title: 'Security',
        content:
            'MoniStash uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is completely protected from hackers.',
        top: '63.5%',
        left: '44.6%',
        icon: IconSecurity
    },
    {
        title: 'Crypto Exchange',
        content:
            'Crypto exchange is a platform where you can buy, sell, exchange cryptocurrencies for other digital assets or traditional fiat like US dollar or Euro.',
        top: '38.5%',
        left: '5.9%',
        icon: IconCryptoExchange
    }
]

const index = 0
</script>
<template>
    <section>
        <div class="image-container">
            <img src="@/assets/feature_2_image-1.5x.png" alt="" />
        </div>
        <FeatureTwoCard
            v-for="({ title, content, top, left, icon }, index) in data"
            :key="index"
            class="card"
            :title="title"
            :content="content"
            :top="top"
            :left="left"
        >
            <component :is="icon" class="icon-image"></component>
        </FeatureTwoCard>
        <!-- THE ICON COMPONENTS ARE NOT DYNAMICALLY DISPLAYING YET! -->
        <IconPlanet1 class="shape planet" />
        <IconAmoebaOutline5 class="shape amoeba o1" />
        <IconAmoebaOutline5 class="shape amoeba o2" />
    </section>
</template>
<style scoped>
section {
    position: relative;
    height: 115vh;
    background-color: #f5f6f6;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
}

.image-container {
    z-index: 1;
}

.image-container img {
    transform-origin: 75% -10%;
    transform: scale(0.88);
}

.card {
    z-index: 1;
}

.icon-image {
    transform: scale(1.3);
}

.shape {
    position: absolute;
    transform: scale(1.32);
}

.amoeba.o1 {
    top: 18%;
    left: 4.5%;
}

.amoeba.o2 {
    top: 11%;
    right: 4.5%;
}

.planet {
    top: 8%;
    right: 41.2%;
}
</style>
