<script setup lang="ts">
import HandMakingPayments from '@/components/HandMakingPayments.vue'
import SubscribeNewsletterMin from '@/components/SubscribeNewsletterMin.vue'
import IconSpirals5 from '@/components/icons/IconSpirals5.vue'
import IconSpirals6 from '@/components/icons/IconSpirals6.vue'
import IconMechanicWaves from '@/components/icons/IconMechanicWaves.vue'
</script>
<template>
    <section class="base">
        <HandMakingPayments class="icon" />
        <slot></slot>
        <IconSpirals5 class="shape spiral5" />
        <IconSpirals6 class="shape spiral6" />
        <IconMechanicWaves class="shape mechanic-waves" />
    </section>
    <SubscribeNewsletterMin />
</template>
<style scoped>
section.base {
    position: relative;
    display: flex;
    padding-left: 20%;
    padding-top: 7%;
    gap: 20px;
    background-color: #fafafa;
    height: calc(100vh - 7em);
}

.shape {
    position: absolute;
}

.spiral5 {
    top: 0;
    right: 0;
}

.spiral6 {
    bottom: 0;
    left: 0;
}

.mechanic-waves {
    bottom: 0;
    right: 10px;
}
</style>
