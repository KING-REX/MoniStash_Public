<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import GetStartedButton from './GetStartedButton.vue'
import CustomButton from './CustomButton.vue'
import IconPlanet1 from './icons/IconPlanet1.vue'
import IconPlanet2 from './icons/IconPlanet2.vue'
import IconAmoebaFilled1 from './icons/IconAmoebaFilled1.vue'
import IconAmoebaOutline1 from './icons/IconAmoebaOutline1.vue'
import IconSpiral from './icons/IconSpiral.vue'
import IconAmoebaOutline2 from './icons/IconAmoebaOutline2.vue'
</script>

<template>
    <header>
        <div class="primary">
            <div class="header-writeup">
                <div class="title-div">
                    <h1 class="title">Buy, Sell, and</h1>
                    <h1 class="title green">Save in Cryptocurrency</h1>
                </div>
                <span class="sub-title">Trade, save and earn interest on your savings.</span>
                <div class="button-container">
                    <GetStartedButton textClass="get-started-text" class="get-started-button" />
                    <CustomButton class="contact-us" title="Contact Us" />
                </div>
            </div>
            <div class="global-partners">
                <span>Our Global Partners:</span>
                <ul>
                    <li>
                        <img src="@/assets/binance_logo-1.5x.png" alt="Binance" />
                    </li>
                    <li>
                        <img src="@/assets/kucoin_logo-1.5x.png" alt="Kucoin" />
                    </li>
                    <li>
                        <img src="@/assets/gemini_logo-1.5x.png" alt="Gemini" />
                    </li>
                    <li>
                        <img src="@/assets/coinbase_logo-1.5x.png" alt="Coinbase" />
                    </li>
                    <li>
                        <img src="@/assets/huobi_logo-1.5x.png" alt="Huobi" />
                    </li>
                </ul>
            </div>
        </div>
        <div class="secondary">
            <img src="@/assets/header-image-2x.png" alt="" />
            <IconPlanet1 class="shape planet p1" />
            <IconPlanet2 class="shape planet p2" />
            <IconAmoebaFilled1 class="shape amoeba f1" />
            <IconAmoebaOutline1 class="shape amoeba o1" />
            <IconAmoebaOutline2 class="shape amoeba o2" />
            <IconSpiral class="shape spiral" />
        </div>
    </header>
</template>

<style scoped>
header {
    position: relative;
    display: flex;
    padding: 10em 10em 0;
    padding-left: 12em;
    height: 100vh;
    background-color: #f6f6f6;
    width: 100%;
}

header .primary {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10em;
    height: 100%;
    width: 60%;
}

.header-writeup {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.header-writeup .title {
    font-size: 4.8rem;
    font-weight: bold;
    line-height: 1.2;
}

.header-writeup .title.green {
    font-style: italic;
    color: var(--color-primary);
}

.header-writeup .sub-title {
    font-size: 1.6rem;
}

.contact-us {
    display: none;
    height: 100%;
    width: 12rem;
    border-color: #cecede;
}

.global-partners span {
    font-weight: bold;
    font-size: 1.1rem;
}

.global-partners ul {
    display: flex;
    margin-top: 3rem;
    list-style-type: none;
    gap: 2rem;
}

.global-partners li {
    height: 1rem;
    width: 8rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* background-color: coral; */
}

header .secondary {
    width: 40%;
    display: flex;
    align-items: flex-end;
}

header .secondary img {
    width: 100%;
    z-index: 10;
    pointer-events: none;
    user-select: none;
    transform: scale(1.7);
    transform-origin: 60% 100%;
}

.shape {
    position: absolute;
}

.planet {
    width: 20px;
    height: 20px;
    z-index: 0;
}

.planet.p1 {
    top: 11.8%;
    right: 36%;
}

.planet.p2 {
    top: 65%;
    right: 51%;
}

.amoeba {
    width: 60%;
    height: 60%;
}

.amoeba.f1 {
    top: 6%;
    right: -5%;
}

.amoeba.o1 {
    top: 30%;
    right: 1%;
}

.amoeba.o2 {
    bottom: 0;
    right: 16%;
    width: 32%;
    height: 32%;
}

.spiral {
    top: 0;
    left: 0;
    z-index: -1;
}

@media all and (min-width: 2560px) {
}

@media all and (max-width: 1880px) {
    header .secondary img {
        transform: scale(1.6);
    }
}

@media all and (max-width: 1835px) {
    .header-writeup .title {
        font-size: 4.5rem;
    }
}

@media all and (max-width: 1760px) {
    header .secondary img {
        transform: scale(1.7);
    }
}

@media all and (max-width: 1720px) {
    .header-writeup .title {
        font-size: 4rem;
    }

    .global-partners ul {
        gap: 0rem;
        margin-top: 2rem;
    }

    .global-partners li img {
        transform: scale(0.7);
    }
}

@media all and (max-width: 1630px) {
    header {
        padding-left: 8em;
        padding-right: 8em;
    }
    header .secondary img {
        transform: scale(1.8);
    }
}

@media all and (max-width: 1540px) {
    .header-writeup .title {
        font-size: 3.5rem;
    }

    .header-writeup .sub-title {
        font-size: 1.3rem;
    }
}

@media all and (max-width: 1440px) {
    header {
        padding-top: 12em;
    }

    .header-writeup .title {
        font-size: 3.2rem;
    }

    .header-writeup .sub-title {
        font-size: 1rem;
    }

    .global-partners span {
        font-size: 0.9rem;
    }

    .global-partners li {
        width: 7rem;
    }

    header .secondary img {
        transform: scale(2);
        margin-left: 2rem;
    }
}

@media all and (max-width: 1350px) {
    header {
        padding-top: 10em;
        height: 90vh;
    }

    header .secondary img {
        transform: scale(1.9);
        margin-left: 2rem;
    }
}

@media all and (max-width: 1300px) {
    .shape {
        transform: scale(0.9);
    }
}

@media all and (max-width: 1250px) {
    header {
        height: 85vh;
    }

    .header-writeup {
        gap: 1rem;
    }

    .header-writeup .title {
        font-size: 3rem;
    }

    header .secondary img {
        margin-left: 3rem;
    }
}

@media all and (max-width: 1200px) {
    header {
        height: 80vh;
    }

    .header-writeup {
        gap: 0.8rem;
    }

    .header-writeup .title {
        font-size: 2.5rem;
    }

    .header-writeup .sub-title {
        font-size: 0.9rem;
    }

    .global-partners span {
        font-size: 0.85rem;
    }

    .global-partners li {
        width: 6.2rem;
    }

    .global-partners li img {
        width: 100%;
    }

    .amoeba.f1 {
        right: -6%;
    }

    .amoeba.o1 {
        right: -5%;
    }

    .amoeba.o2 {
        right: 12%;
    }
}

@media all and (max-width: 1100px) {
    header {
        height: 70vh;
    }
}

@media all and (max-width: 1024px) {
    header {
        padding-top: 8em;
        padding-left: 5em;
    }

    header .primary {
        padding-bottom: 8em;
    }

    .header-writeup .title {
        font-size: 2.2rem;
    }

    .global-partners span {
        font-size: 0.8rem;
    }

    .global-partners ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        row-gap: 0.9rem;
        width: 75%;
    }

    .global-partners li {
        width: 5.5rem;
    }

    .amoeba.f1 {
        top: 10%;
        transform: scale(0.8);
    }
}

@media all and (max-width: 930px) {
    header {
        height: 60vh;
        padding-top: 5em;
    }

    header .primary {
        padding-bottom: 5em;
    }

    .amoeba.f1 {
        top: 6%;
        transform: scale(0.9);
    }
}

@media all and (max-width: 900px) {
    header {
        height: 55vh;
    }

    .header-writeup .title {
        font-size: 2rem;
    }

    .get-started-button {
        width: 8rem !important;
        height: 3rem !important;
        gap: 0.5rem !important;
    }
}

@media all and (max-width: 810px) {
    .header-writeup .title {
        font-size: 1.8rem;
    }

    .header-writeup .sub-title {
        font-size: 0.8rem;
    }

    .global-partners span {
        font-size: 0.75rem;
    }

    header .secondary img {
        transform: scale(2);
    }
}

@media all and (max-width: 768px) {
    header {
        height: 115vh;
        flex-direction: column;
        background-color: #fff;
    }

    header .primary,
    header .secondary {
        width: 100%;
        height: 50%;
    }

    header .primary {
        padding-bottom: 11em;
    }

    .header-writeup .title {
        font-size: 3rem;
    }

    .button-container {
        display: flex;
        gap: 1.5rem;
    }

    .get-started-button {
        width: 12rem !important;
        height: 3.5rem !important;
        gap: 1rem !important;
    }

    .contact-us {
        display: initial;
    }

    .global-partners ul {
        display: flex;
        margin-top: 1.5rem;
    }

    header .secondary {
        align-self: center;
        justify-content: flex-end;
    }

    header .secondary img {
        transform: none;
        /* width: 80%; */
    }

    .amoeba.f1 {
        top: 35%;
        left: 22%;
    }

    .amoeba.o1 {
        display: none;
    }

    .amoeba.o2 {
        bottom: -6%;
        left: 25%;
        transform: scale(1.3);
    }

    .spiral {
        top: 0;
        left: 0;
        transform: scale(3);
    }
}
</style>

/******************* SCOPELESS/GLOBAL STYLES */

<style>
@media all and (max-width: 900px) {
    .get-started-text {
        font-size: 0.8rem !important;
    }
}

@media all and (max-width: 768px) {
    .get-started-text {
        font-size: 1rem !important;
    }
}
</style>
