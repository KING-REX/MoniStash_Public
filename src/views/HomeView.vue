<script setup lang="ts">
import FeatureOne from './sections/home/FeatureOne.vue'
import HomeHeader from './sections/home/HomeHeader.vue'
import ExchangeRates from './sections/home/ExchangeRates.vue'
import WhySave from './sections/home/WhySave.vue'
import FeatureTwo from './sections/home/FeatureTwo.vue'
import HowItWorks from './sections/home/HowItWorks.vue'
import AppDownload from './sections/home/AppDownload.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
    <HomeHeader />
    <main>
        <hr />
        <FeatureOne />
        <hr />
        <ExchangeRates />
        <hr />
        <WhySave />
        <hr />
        <FeatureTwo />
        <hr />
        <HowItWorks />
        <hr />
        <AppDownload />
        <hr :style="{ backgroundColor: '#fff' }" />
    </main>
    <AppFooter />
</template>

<style scoped>
hr {
    height: 5px;
    background-color: #fafafa;
    outline: none;
    border: none;
}
</style>
