<script setup lang="ts">
import IconAmoebaSolid1 from './icons/IconAmoebaSolid1.vue'
import IconAppleStore from './icons/IconAppleStore.vue'
import IconGooglePlay from './icons/IconGooglePlay.vue'
import IconPlanet4 from './icons/IconPlanet4.vue'
</script>
<template>
    <section>
        <div class="primary">
            <div class="write-up">
                <h1 class="heading">Secured fast payment, anytime, anywhere.</h1>
                <span class="content">
                    Discover our mobile app and get the best outcome of online crypto payment and
                    enjoy your everyday transaction.
                </span>
            </div>
            <div class="app-download">
                <a href="#">
                    <IconGooglePlay />
                </a>
                <a href="#">
                    <IconAppleStore />
                </a>
            </div>
            <span class="coming-soon">Coming Soon</span>
        </div>
        <IconPlanet4 class="shape planet" />
        <img src="@/assets/woman_holding_phone-1.5x.png" alt="" class="shape phone-holding-img" />
        <img src="@/assets/app_download_phone_image-1.5x.png" alt="" class="shape phone-image" />
        <IconAmoebaSolid1 class="shape amoeba s1" />
        <IconAmoebaSolid1 class="shape amoeba s2" />
        <IconAmoebaSolid1 class="shape amoeba s3" />
    </section>
</template>
<style scoped>
section {
    position: relative;
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

.phone-holding-img {
    right: -4.5%;
    transform: scale(0.88);
    transform-origin: 0 100%;
    z-index: 2;
}

.phone-image {
    right: 28%;
    transform: scale(0.88);
    transform-origin: 0 100%;
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
</style>
