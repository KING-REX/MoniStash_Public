<script setup lang="ts">
import FeatureOne from '@/components/FeatureOne.vue'
import HomeHeader from '@/components/HomeHeader.vue'
import ExchangeRates from '@/components/ExchangeRates.vue'
import WhySave from '@/components/WhySave.vue'
import FeatureTwo from '@/components/FeatureTwo.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import AppDownload from '@/components/AppDownload.vue'
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
