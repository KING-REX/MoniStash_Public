<script setup lang="ts">
import CustomButton from './CustomButton.vue'
import IconPlanet1 from './icons/IconPlanet1.vue'
</script>
<template>
    <section>
        <div class="primary">
            <div class="image-container">
                <img src="@/assets/feature_1_image_card.svg" alt="" />
                <CustomButton
                    title="Buy Crypto"
                    fill
                    textColor="#fff"
                    :textStyle="{ fontWeight: '600', fontSize: '1.3em' }"
                    classes="button"
                />
            </div>
        </div>
        <div class="write-up">
            <h1 class="title">Buy quickly and easily with No KYC</h1>
            <span class="content">
                Use your card or bank account to buy crypto. We don't require any KYC before you can
                buy. Give it a try.
            </span>
            <IconPlanet1 class="shape" id="planet-1" />
            <IconPlanet1 class="shape" id="planet-2" />
            <IconPlanet1 class="shape" id="planet-3" />
        </div>
    </section>
</template>
<style scoped>
section {
    display: flex;
    height: 87.5vh;
}

section > * {
    width: 50%;
}

section .primary {
    padding: 5em 1em;
}

section .image-container {
    position: relative;
    transition: all 0.5s;
    transform-origin: 0 0;
}

section .image-container:hover {
    transform: scale(1.05);
}

section .image-container img {
    transform: scale(1.3);
    transform-origin: 0 0;
}

.image-container .button {
    position: absolute;
    bottom: -18%;
    right: 6%;
    height: 12%;
    width: 59%;
}

.write-up {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4.8rem;
    padding: 0 7em;
    width: 50rem;
}

.write-up .title {
    font-weight: bold;
    font-size: 3.2rem;
    line-height: 1;
    color: #17293b;
}

.write-up .content {
    font-size: 1.7rem;
    line-height: 1.35;
}

.shape {
    position: absolute;
    transform-origin: 0 0;
    transform: scale(4);
}

#planet-1 {
    top: 10%;
    left: 30%;
}

#planet-2 {
    bottom: 27%;
    right: 5%;
    z-index: 1;
}

#planet-3 {
    bottom: 23%;
    right: 1.5%;
}
</style>
