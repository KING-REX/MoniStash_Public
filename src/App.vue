<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
    <NavBar />
    <RouterView />
    <AppFooter />
</template>

<style scoped></style>
