<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CustomButton from './CustomButton.vue'
import IconMenuBars from './icons/IconMenuBars.vue'
</script>
<template>
    <nav>
        <div class="primary">
            <img src="@/assets/logo_full.svg" alt="MoniStash Logo" />
        </div>
        <div class="nav-links">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
            <RouterLink class="nav-link" to="/about-us">About us</RouterLink>
            <RouterLink class="nav-link" to="/blog">Blog</RouterLink>
            <RouterLink class="nav-link" to="/faqs">FAQs</RouterLink>
        </div>
        <div class="account-control">
            <CustomButton :fill="false" title="Login" type="link" class="account-action" />
            <CustomButton
                :fill="true"
                title="Create Account"
                textColor="#FFF"
                class="account-action"
            />
        </div>
        <div class="mobile-toggler">
            <IconMenuBars class="menu-icon" />
        </div>
    </nav>
</template>
<style scoped>
nav {
    padding: 0 2em;
    background-color: #fafafa;
    display: flex;
    justify-content: space-between;
}

nav > * {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7em;
}

.nav-links {
    justify-content: center;
    gap: 1em;
}

.nav-link {
    justify-content: center;
    align-items: center;
    padding: 0 1.2rem;
    font-size: 1.05rem;
    color: #5b5b86;
}

.account-control {
    gap: 1rem;
}

.mobile-toggler {
    display: none;
    cursor: pointer;
}

a.router-link-exact-active {
    color: var(--color-primary);
}

@media all and (max-width: 1250px) {
    nav {
        padding: 0;
    }

    .nav-links {
        gap: 0.8em;
    }
}

@media all and (max-width: 1200px) {
    .nav-links {
        gap: 0.7em;
    }

    .nav-link {
        font-size: 0.9rem;
    }
}

@media all and (max-width: 1100px) {
    .nav-links {
        gap: 2.5rem;
    }
    .nav-link {
        padding: 0;
    }
}

@media all and (max-width: 1024px) {
    .account-action {
        font-size: 0.85rem;
        width: 7.5rem;
        height: 35%;
    }
}

@media all and (max-width: 900px) {
    nav {
        height: 6em;
        align-items: center;
    }

    .nav-links {
        gap: 2rem;
    }

    .nav-link {
        font-size: 0.75rem;
    }

    .account-control {
        gap: 0.5rem;
    }

    .account-action {
        font-size: 0.75rem;
        width: 7rem;
        height: 30%;
    }

    .account-action:first-child {
        width: 3.5rem;
    }
}

@media all and (max-width: 768px) {
    nav {
    }

    .nav-links,
    .account-control {
        display: none;
    }

    .mobile-toggler {
        display: flex;
        justify-content: flex-end;
        padding-right: 2em;
    }
}
</style>
