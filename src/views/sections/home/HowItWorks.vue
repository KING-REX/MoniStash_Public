<script setup lang="ts">
import { matches320, matches540, matches768, matches900 } from '@/composables/MatchMedia'
import GetStartedButton from '@/components/GetStartedButton.vue'
import IconDoubleUser from '@/components/icons/IconDoubleUser.vue'
import IconFundWallet from '@/components/icons/IconFundWallet.vue'
import IconWithdraw from '@/components/icons/IconWithdraw.vue'
</script>
<template>
    <section>
        <h1 class="title">How it works</h1>
        <div class="details">
            <div class="detail">
                <div class="icon">
                    <IconDoubleUser class="icon-image" />
                </div>
                <div class="write-up">
                    <h3 class="title">Create an account</h3>
                    <span class="content">Signup for a free account on our website</span>
                </div>
            </div>
            <div class="detail">
                <div class="icon">
                    <IconFundWallet class="icon-image" />
                </div>
                <div class="write-up">
                    <h3 class="title">Fund wallet</h3>
                    <span class="content">
                        Start saving in usdt by funding your wallet using your local bank card or
                        bank transfer
                    </span>
                </div>
            </div>
            <div class="detail">
                <div class="icon">
                    <IconWithdraw class="icon-image" />
                </div>
                <div class="write-up">
                    <h3 class="title">Withdraw</h3>
                    <span class="content">
                        Withdraw your funds to your bank account or your USDT wallet address.
                    </span>
                </div>
            </div>
        </div>
        <GetStartedButton
            class="get-started"
            :multiple="matches320 ? 0.8 : matches540 ? 1 : matches768 ? 1.2 : matches900 ? 1 : 1.4"
            noLetterSpacing
        />
    </section>
</template>
<style scoped>
section {
    height: 64vh;
    background-color: #17293b;
    padding-top: 2.5em;
    letter-spacing: 0.03em;
}

section > .title {
    font-size: 2.6rem;
    color: #fff;
    text-align: center;
    margin-bottom: 0.8em;
}

.details {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 85%;
}

.detail {
    display: flex;
    flex-direction: column;
    flex-basis: 25%;
    align-items: center;
    gap: 1.5em;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.5em;
    height: 4.5em;
    border-radius: 30px;
    background-color: #445261;
}

.icon-image {
    transform: scale(1.3);
}

.write-up {
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
}

.write-up .title {
    font-weight: 500;
    font-size: 1.5rem;
}

.write-up .content {
    font-weight: 300;
    font-size: 1.4rem;
    letter-spacing: normal;
    line-height: 1.7;
}

.get-started {
    margin: 4.5rem auto 0;
}

@media all and (max-width: 1600px) {
    .detail {
        flex-basis: 30%;
    }
}

@media all and (max-width: 1500px) {
    .write-up .content {
        font-size: 1.2rem;
    }
}

@media all and (max-width: 1300px) {
    .details {
        width: 92%;
    }
}

@media all and (max-width: 1024px) {
    section {
        height: 90vh;
    }

    .details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 4em;
        column-gap: 2em;
    }

    .detail:last-of-type {
        grid-column: 1/3;
        width: 50%;
        justify-self: center;
    }
}

@media all and (max-width: 768px) {
    section {
        height: 130vh;
    }
    .details {
        grid-template-columns: 1fr;
    }

    .detail {
        width: 50%;
        justify-self: center;
    }

    .detail:last-of-type {
        grid-column: auto;
    }
}

@media all and (max-width: 630px) {
    section {
        height: 120vh;
    }

    .detail {
        width: 75% !important;
    }
}

@media all and (max-width: 540px) {
    section {
        height: 100vh;
    }

    section > .title {
        font-size: 2rem;
    }

    .details {
        row-gap: 2em;
    }

    .write-up .title {
        font-size: 1.2rem;
    }

    .write-up .content {
        font-size: 1rem;
    }

    .get-started {
        margin-top: 3rem;
    }
}

@media all and (max-width: 450px) {
    section {
        height: 95vh;
    }

    .icon {
        width: 3.5em;
        height: 3.5em;
    }

    .icon-image {
        transform: scale(1);
    }
}

@media all and (max-width: 425px) {
    section {
        height: 85vh;
    }
    section > .title {
        font-size: 1.8rem;
    }

    .detail {
        width: 85% !important;
    }

    .write-up .title {
        font-size: 1rem;
    }

    .write-up .content {
        font-size: 0.9rem;
    }
}

@media all and (max-width: 375px) {
    section {
        padding-top: 1.5em;
        height: 82vh;
    }

    .detail {
        gap: 1em;
        width: 90% !important;
    }

    .get-started {
        margin-top: 1.5rem;
    }
}

@media all and (max-width: 320px) {
    section {
        height: 78vh;
    }

    .icon {
        border-radius: 20px;
        width: 3em;
        height: 3em;
    }
}
</style>
