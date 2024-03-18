<script setup lang="ts">
import GetStartedButton from './GetStartedButton.vue'
import IconDoubleUser from './icons/IconDoubleUser.vue'
import IconFundWallet from './icons/IconFundWallet.vue'
import IconWithdraw from './icons/IconWithdraw.vue'
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
        <GetStartedButton class="get-started" :multiple="1.4" noLetterSpacing />
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
</style>
