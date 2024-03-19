<script setup lang="ts">
import IconAmoebaSolid1 from './icons/IconAmoebaSolid1.vue'
import IconAppleStore from './icons/IconAppleStore.vue'
import IconGooglePlay from './icons/IconGooglePlay.vue'
import IconPlanet4 from './icons/IconPlanet4.vue'
import { matches768 } from '@/composables/MatchMedia'
</script>
<template>
    <section>
        <div class="primary">
            <span v-if="matches768" class="coming-soon">Coming Soon</span>
            <div class="write-up">
                <h1 class="heading">Secured fast payment, anytime, anywhere.</h1>
                <span class="content">
                    Discover our mobile app and get the best outcome of online crypto payment and
                    enjoy your everyday transaction.
                </span>
            </div>
            <div class="app-download">
                <a href="#">
                    <IconGooglePlay class="app-download-image" />
                </a>
                <a href="#">
                    <IconAppleStore class="app-download-image" />
                </a>
            </div>
            <span v-if="!matches768" class="coming-soon">Coming Soon</span>
        </div>
        <div class="image-container">
            <IconPlanet4 class="shape planet" />
            <img src="@/assets/app_download_phone_image-1.5x.png" alt="" class="phone-image" />
            <img src="@/assets/woman_holding_phone-1.5x.png" alt="" class="phone-holding-img" />
            <IconAmoebaSolid1 class="shape amoeba s1" />
            <IconAmoebaSolid1 class="shape amoeba s2" />
            <IconAmoebaSolid1 class="shape amoeba s3" />
        </div>
    </section>
</template>
<style scoped>
section {
    position: relative;
    display: flex;
    height: 77vh;
    background-color: #00509d;
    overflow: hidden;
}

.primary {
    margin-left: 7.5rem;
    padding-top: 11rem;
    width: 40%;
    height: 100%;
    color: white;
}

.heading {
    margin-bottom: 0.5em;
    font-size: 3.3rem;
    font-weight: 600;
    line-height: 1.2;
}

.content {
    font-size: 2rem;
    font-weight: 200;
    line-height: 1.2;
}

.app-download {
    display: flex;
    gap: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
}

.coming-soon {
    padding: 0.5rem 0.8rem;
    font-size: 1.4rem;
    color: #25a18e;
    background-color: #07609a;
    border: 1px solid #25a18e;
    border-radius: 25px;
}

.image-container {
    display: flex;
    align-items: flex-end;
}

.phone-image {
    margin-left: 10%;
    width: 35%;
    z-index: 1;
}

.phone-holding-img {
    width: 60%;
    z-index: 2;
}

.shape {
    position: absolute;
    bottom: 0;
}

.planet {
    right: 0;
    transform: scale(1.3);
    transform-origin: 100% 100%;
    z-index: 1;
}

.amoeba.s1 {
    bottom: 8%;
    right: 6%;
    transform: scale(1.3);
}

.amoeba.s2 {
    bottom: -17%;
    right: 30%;
    transform: scale(1.3);
    transform-origin: 50% 0;
}

.amoeba.s3 {
    bottom: -17%;
    right: 18%;
}

@media all and (max-width: 1700px) {
    .primary {
        margin-left: 6.7rem;
        padding-top: 9rem;
    }
    .content {
        font-size: 1.5rem;
    }
}

@media all and (max-width: 1600px) {
    .primary {
        margin-left: 6rem;
    }

    .heading {
        font-size: 2.8rem;
    }

    .phone-image {
        margin-left: 15%;
    }

    .planet {
        transform: scale(1.15);
    }
}

@media all and (max-width: 1500px) {
    .primary {
        width: 50%;
    }

    .content {
        font-size: 1.2rem;
    }

    .phone-image {
        margin-left: 5%;
        width: 40%;
    }

    .phone-holding-img {
        width: 65%;
    }

    .app-download {
        gap: 1rem;
    }

    .app-download a > * {
        transform: scale(0.9);
    }
}

@media all and (max-width: 1400px) {
    .primary {
        width: 60%;
    }

    .phone-image {
        margin-left: 2%;
    }

    .planet,
    .amoeba.s1,
    .amoeba.s2 {
        transform: scale(1);
    }
}

@media all and (max-width: 1300px) {
    .primary {
        margin-left: 4rem;
        padding-top: 7rem;
        width: 70%;
    }

    .app-download {
        gap: 0;
    }

    .app-download-image {
        width: 90%;
    }

    .phone-image {
        margin-left: -5%;
        width: 40%;
    }

    .phone-holding-img {
        width: 75%;
    }
}
@media all and (max-width: 1200px) {
    section {
        height: 65vh;
    }

    .primary {
        width: 80%;
    }

    .heading {
        font-size: 2.4rem;
    }

    .app-download {
        width: 80%;
    }

    .app-download-image {
        width: 100%;
    }

    .phone-image {
        margin-left: 0;
        width: 40%;
    }

    .amoeba.s1,
    .amoeba.s2,
    .amoeba.s3 {
        transform: scale(0.8);
    }

    .amoeba.s1 {
        right: 2%;
    }

    .amoeba.s2 {
        bottom: -25%;
        right: 25%;
    }
}

@media all and (max-width: 1024px) {
    section {
        height: 55vh;
    }

    .primary {
        padding-top: 3rem;
        margin-left: 2.5rem;
        width: 100%;
    }

    .phone-image {
        margin-left: -5%;
        width: 45%;
    }

    .phone-holding-img {
        width: 85%;
        margin-left: -10%;
    }

    .planet {
        transform: scale(0.85);
    }

    .amoeba.s1,
    .amoeba.s2,
    .amoeba.s3 {
        transform: scale(0.7);
    }

    .amoeba.s2 {
        bottom: -35%;
    }

    .amoeba.s3 {
        bottom: -25%;
    }
}

@media all and (max-width: 950px) {
    .heading {
        width: 150%;
    }

    .amoeba.s1 {
        right: -2%;
    }
}

@media all and (max-width: 800px) {
    .heading {
        font-size: 1.8rem;
    }

    .content {
        font-size: 1rem;
    }
}

@media all and (max-width: 768px) {
    section {
        height: 40vh;
    }

    .primary {
        width: 150%;
    }

    .coming-soon {
        background-color: #e4fffb;
        font-size: 1.1rem;
    }

    .heading {
        margin-top: 2rem;
        width: 100%;
    }

    .app-download {
        margin-top: 0rem;
        width: 50%;
    }

    .phone-image {
        width: 30%;
        margin-left: 15%;
    }

    .phone-holding-img {
        width: 60%;
    }

    .planet {
        transform: scale(0.5);
    }

    .amoeba.s1,
    .amoeba.s2,
    .amoeba.s3 {
        transform: scale(0.4);
    }

    .amoeba.s1 {
        bottom: -15%;
        left: 45%;
    }

    .amoeba.s2 {
        bottom: -80%;
        left: 22%;
    }

    .amoeba.s3 {
        bottom: -50%;
        left: 27%;
    }
}

@media all and (max-width: 680px) {
    .coming-soon {
        font-size: 0.8rem;
    }

    .heading {
        width: 150%;
    }
}

@media all and (max-width: 640px) {
    section {
        height: 35vh;
    }

    .primary {
        padding-top: 2rem;
        width: 200%;
    }

    .heading {
        margin-top: 1rem;
    }

    .app-download {
        margin-top: -1rem;
        /* width: 50%; */
    }

    .phone-image {
        width: 35%;
        margin-left: 20%;
    }

    .phone-holding-img {
        width: 65%;
    }
}

@media all and (max-width: 540px) {
    .content {
        font-size: 0.8rem;
        line-height: 0.9;
    }
}

@media all and (max-width: 500px) {
    .primary {
        margin-left: 1.5rem;
    }

    .app-download {
        width: 100%;
    }

    .app-download-image {
        width: 100%;
    }

    .planet {
        transform: scale(0.4);
    }
}

@media all and (max-width: 475px) {
    .heading {
        font-size: 1rem;
    }
}

@media all and (max-width: 425px) {
    section {
        height: 30vh;
    }

    .primary {
        padding-top: 0.8rem;
    }

    .coming-soon {
        font-size: 0.7rem;
        padding: 0.3rem 0.5rem;
    }

    .content {
        font-size: 0.7rem;
    }
}

@media all and (max-width: 400px) {
    .primary {
        width: 300%;
    }

    .app-download {
        margin-top: -2rem;
    }

    .phone-image {
        width: 45%;
        margin-left: 15%;
    }

    .phone-holding-img {
        margin-left: -20%;
        width: 75%;
    }
}
</style>
