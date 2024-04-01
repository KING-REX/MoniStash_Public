<script setup lang="ts">
import { ref } from 'vue'
import CustomButton from '@/components/CustomButton.vue'
import IconPlanet1 from '@/components/icons/IconPlanet1.vue'
import { matches425, matches540, matches768 } from '@/composables/MatchMedia'
</script>
<template>
    <section>
        <div class="primary">
            <div class="image-container">
                <img src="@/assets/feature_1_image_card-cropped.svg" alt="" />
                <CustomButton
                    title="Buy Crypto"
                    fill
                    textColor="#fff"
                    :textStyle="{
                        fontWeight: '600',
                        fontSize: `${matches425 ? 0.9 : matches540 ? 1 : 1.3}em`
                    }"
                    classes="button"
                />
            </div>
        </div>
        <div class="write-up">
            <h1 class="title">
                <!-- {{ !matches768 ? 'Buy quickly and easily' : 'Buy quickly, easily,' }} -->
                {{ `Buy quickly${!matches768 ? ' and ' : ', '}easily${!matches768 ? '' : ','}` }}
                <span>{{ !matches768 ? 'with No KYC' : 'and with zero KYC' }}</span>
            </h1>
            <span class="content">
                <span>{{
                    `Use your ${!matches768 ? '' : 'credit '}card${!matches768 ? ' or ' : ', '}bank account to buy crypto.`
                }}</span>
                <span>{{
                    `We don't require any KYC before you can${!matches768 ? ' buy.' : ''}`
                }}</span>
                <span>{{ `${!matches768 ? '' : 'purchase your crypto. '}Give it a try.` }}</span>
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
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: all 0.5s;
    transform-origin: 0 0;
}

section .image-container:hover {
    transform: scale(1.05);
}

section .image-container img {
    margin-left: auto;
    width: 85%;
    transform-origin: 0 0;
}

.image-container .button {
    width: 60%;
    padding: 2.2% 0;
    margin: -15% 4.5% 0 auto;
}

.write-up {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4.8rem;
    padding-left: 7em;
}

.write-up .title {
    font-weight: bold;
    font-size: 3.2rem;
    line-height: 1;
    color: #17293b;
}

.write-up .title span {
    display: block;
}

.write-up .content {
    font-size: 1.7rem;
    line-height: 1.35;
}

.write-up .content span {
    display: block;
}

.shape {
    position: absolute;
    transform-origin: 0 0;
    transform: scale(4);
}

#planet-1 {
    top: 10%;
    left: 25%;
}

#planet-2 {
    bottom: 27%;
    right: 20%;
    z-index: 1;
}

#planet-3 {
    bottom: 23%;
    right: 16.5%;
}

@media all and (min-width: 2560px) {
}

@media all and (max-width: 1880px) {
}

@media all and (max-width: 1700px) {
    .write-up {
        gap: 4rem;
    }

    .write-up .title {
        font-size: 3rem;
    }

    .write-up .content {
        font-size: 1.5rem;
    }
}

@media all and (max-width: 1600px) {
    .write-up .title {
        font-size: 2.8rem;
    }

    .write-up .content {
        font-size: 1.3rem;
    }
}

@media all and (max-width: 1500px) {
    section .primary {
        padding-top: 6.5em;
        padding-bottom: 3.5em;
    }
}

@media all and (max-width: 1440px) {
    section .primary {
        padding-top: 8em;
        padding-bottom: 1em;
    }

    .write-up .title {
        font-size: 2.5rem;
    }

    .write-up .content {
        font-size: 1rem;
    }
}

@media all and (max-width: 1300px) {
    section {
        height: 82vh;
    }

    .write-up {
        padding-left: 4em;
        gap: 3.5rem;
    }

    .write-up .title,
    .write-up .content {
        line-height: 1.4;
    }
}

@media all and (max-width: 1200px) {
    section .primary {
        padding-top: 11em;
        padding-bottom: 0;
    }

    .write-up {
        gap: 2rem;
    }

    .write-up .title {
        font-size: 2rem;
    }

    .write-up .content {
        font-size: 0.9rem;
    }
}

@media all and (max-width: 1024px) {
    section .primary {
        padding-left: 0;
        padding-right: 0;
    }

    section .image-container img {
        width: 90%;
    }
}

@media all and (max-width: 900px) {
    section {
        height: 75vh;
    }

    .write-up {
        gap: 1.5rem;
    }

    .write-up .title {
        font-size: 1.7rem;
    }

    .write-up .content {
        font-size: 0.75rem;
    }
}

@media all and (max-width: 768px) {
    section {
        flex-direction: column-reverse;
        justify-content: flex-end;
        gap: 6rem;
        height: 120vh;
    }

    section > * {
        width: 100%;
    }

    section .primary {
        padding: 0;
        z-index: 1;
    }

    section .image-container img {
        margin-right: auto;
        margin-left: 5%;
        width: 85%;
    }

    .image-container .button {
        margin: -12% 14.5% 0 auto;
        width: 60%;
    }

    .write-up {
        justify-content: flex-start;
        gap: 2rem;
        padding-top: 5rem;
    }

    .write-up .title {
        line-height: 1;
        font-size: 3rem;
    }

    .write-up .content {
        line-height: 1.6;
        font-size: 1.1rem;
    }

    #planet-1 {
        top: 8%;
        left: 75%;
        z-index: 1;
    }

    #planet-2 {
        bottom: -10%;
        right: 15%;
    }

    #planet-3 {
        bottom: -21%;
        right: 11%;
    }
}

@media all and (max-width: 630px) {
    section {
        height: 110vh;
    }

    .shape {
        transform: scale(3);
    }

    #planet-1 {
        left: 80%;
    }

    .write-up .title {
        font-size: 2.8rem;
    }

    .write-up .content {
        font-size: 1rem;
    }
}

@media all and (max-width: 540px) {
    section {
        height: 95vh;
    }

    .write-up .title {
        font-size: 2.5rem;
    }

    .write-up .content {
        font-size: 0.9rem;
    }
}

@media all and (max-width: 480px) {
    section {
        height: 85vh;
    }

    .write-up {
        padding-left: 3em;
        padding-top: 3.5rem;
    }

    .write-up .title {
        font-size: 2.2rem;
    }

    .write-up .content {
        font-size: 0.9rem;
    }

    .shape {
        transform: scale(2.2);
    }
}

@media all and (max-width: 425px) {
    section {
        height: 75vh;
        gap: 4rem;
    }

    .write-up {
        padding-left: 2.3em;
        padding-top: 2.5rem;
    }

    .write-up .title {
        font-size: 2rem;
    }

    #planet-1 {
        top: 6%;
    }
}

@media all and (max-width: 375px) {
    .write-up .title {
        font-size: 1.5rem;
    }

    .write-up .content {
        font-size: 0.8rem;
    }
}
</style>
