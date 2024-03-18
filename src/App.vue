<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeHeader from './components/HomeHeader.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
    <NavBar />
    <RouterView />
</template>

<style scoped></style>
