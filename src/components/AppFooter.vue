<script setup lang="ts"></script>
<template>
    <footer>
        <div class="container">
            <div class="top">
                <div class="primary">
                    <div class="logo">
                        <img src="@/assets/logo_full.svg" alt="MoniStash Logo" />
                    </div>
                    <span class="write-up">
                        MoniStash is a cryptocurrency services company and a product of MoniStash
                        Limited with RC: 7252518
                    </span>
                </div>
                <div class="secondary">
                    <ul class="support">
                        <li class="heading">Support</li>
                        <li><a href="/faqs" class="link">FAQs</a></li>
                        <li><a href="#" class="link">Privacy Policy</a></li>
                        <li><a href="#" class="link">admin@monistash.com</a></li>
                        <li><a href="#" class="link">+2347086636912</a></li>
                    </ul>
                    <ul class="company">
                        <li class="heading">Company</li>
                        <li><a href="/blog" class="link">Blog</a></li>
                        <li><a href="#" class="link">About Us</a></li>
                        <li><a href="#" class="link">Terms & Conditions</a></li>
                        <li><a href="#" class="link">Careers</a></li>
                    </ul>
                    <ul class="socials">
                        <li class="heading">Socials</li>
                        <li><a href="#" class="link">Twitter</a></li>
                        <li><a href="#" class="link">Instagram</a></li>
                        <li><a href="#" class="link">Facebook</a></li>
                    </ul>
                    <!-- <ul class="headings">
                        <li>Support</li>
                        <li>Company</li>
                        <li>Socials</li>
                    </ul>
                    <ul class="links-container">
                        <li><a href="/faqs" class="link">FAQs</a></li>
                        <li><a href="/blog" class="link">Blog</a></li>
                        <li><a href="#" class="link">Twitter</a></li>
                        <li><a href="#" class="link">Privacy Policy</a></li>
                        <li><a href="#" class="link">About Us</a></li>
                        <li><a href="#" class="link">Instagram</a></li>
                        <li><a href="#" class="link">admin@monistash.com</a></li>
                        <li><a href="#" class="link">Terms & Conditions</a></li>
                        <li><a href="#" class="link">Facebook</a></li>
                        <li><a href="#" class="link">+2347086636912</a></li>
                        <li><a href="#" class="link">Careers</a></li>
                    </ul> -->
                </div>
            </div>
            <hr />
            <div class="bottom">
                <span class="left">© MoniStash Limited 2023, All Rights Reserved</span>
                <span class="right">Available: Monday - Friday from 8am - 6pm</span>
            </div>
        </div>
    </footer>
</template>
<style scoped>
footer {
    background-color: #fafafa;
    padding-top: 15vh;
    color: #5b5b86;
    font-size: 1.2rem;
}

.container {
    width: 78.5%;
    margin-left: 11.6%;
}

.top {
    display: flex;
    gap: 11.5em;
    padding-bottom: 2em;
}

.primary {
    display: flex;
    flex-direction: column;
    gap: 1.8em;
    justify-content: flex-start;
    width: 32%;
}

.logo img {
    transform: scale(1.35);
    transform-origin: 0 0;
}

.write-up {
    font-size: 1.34rem;
    line-height: 1.7;
}

.secondary {
    display: grid;
    grid-template-columns: 1fr 0.9fr 0.45fr;
    flex-grow: 1;
}

ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    /* row-gap: 1em; */
}

.heading {
    color: #17293b;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    font-weight: 500;
}

li:not(.heading) {
    padding: 0.5em 0;
}

li:not(.heading) a {
    color: inherit;
}

hr {
    border-color: #ececf1;
    border-style: solid;
}

.bottom {
    display: flex;
    justify-content: space-between;
    padding: 2.5em 0;
}

@media all and (max-width: 1600px) {
    .container {
        width: 85%;
        margin-left: 10.45%;
    }
}

@media all and (max-width: 1400px) {
    .top {
        gap: 10em;
    }

    .write-up {
        font-size: 1.2rem;
    }

    li:not(.heading) a {
        font-size: 1.1rem;
    }
}

@media all and (max-width: 1300px) {
    .top {
        gap: 8.5em;
    }
}

@media all and (max-width: 1200px) {
    .top {
        gap: 7em;
    }

    .primary {
        width: 35%;
    }

    .logo img {
        transform: scale(1.1);
    }

    .write-up,
    .bottom span {
        font-size: 1.1rem;
    }

    .heading {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    li:not(.heading) a {
        font-size: 1rem;
    }

    .bottom {
        padding: 2em 0;
    }
}

@media all and (max-width: 1100px) {
    .container {
        margin-left: 8%;
    }

    .top {
        gap: 6em;
    }

    .heading {
        margin-bottom: 0.8rem;
    }
}

@media all and (max-width: 1024px) {
    footer {
        padding-top: 10vh;
    }

    .container {
        width: 88%;
    }

    .top {
        gap: 4em;
    }

    .write-up,
    .bottom span {
        font-size: 1rem;
    }

    .heading {
        margin-bottom: 0rem;
    }

    li:not(.heading) {
        padding: 0.3em 0;
    }

    li:not(.heading) a {
        font-size: 0.9rem;
    }

    .bottom {
        padding: 1.5em 0;
    }
}

@media all and (max-width: 900px) {
    .container {
        margin-left: 5%;
        width: 91%;
    }

    .top {
        padding-bottom: 0;
    }

    .primary {
        gap: 1.3em;
        width: 40%;
    }

    .write-up,
    .bottom span {
        font-size: 0.95rem;
    }

    .secondary {
        grid-template-columns: 1.3fr 1fr;
        row-gap: 2em;
    }

    li:not(.heading) a {
        font-size: 0.85rem;
    }
}

@media all and (max-width: 768px) {
    footer {
        padding-top: 8vh;
    }

    .container {
        width: 78.5%;
        margin-left: 11.6%;
    }

    .top {
        flex-direction: column;
        gap: 2em;
        padding-bottom: 2em;
    }

    .primary {
        width: 70%;
    }

    .secondary {
        grid-template-columns: 1fr 0.9fr 0.45fr;
    }

    .bottom span {
        font-size: 0.7rem;
    }
}

@media all and (max-width: 640px) {
    .container {
        width: 82.5%;
        margin-left: 8.6%;
    }

    .bottom {
        flex-direction: column;
        align-items: center;
    }

    .bottom span {
        font-size: 0.85rem;
    }
}

@media all and (max-width: 540px) {
    .container {
        width: 87.5%;
    }

    .primary {
        width: 85%;
    }

    .logo img {
        transform: scale(1);
    }

    .secondary {
        grid-template-columns: 1.3fr 1fr;
    }

    li:not(.heading) {
        padding: 0.1em 0;
    }
}

@media all and (max-width: 425px) {
    .primary {
        gap: 0.5em;
    }

    .logo img {
        transform: scale(0.9);
    }

    .bottom span {
        font-size: 0.8rem;
    }
}

@media all and (max-width: 375px) {
    .top {
        padding-bottom: 0;
    }

    .primary {
        gap: 0;
    }

    .logo img {
        transform: scale(0.8);
    }

    .write-up,
    .bottom span {
        font-size: 0.85rem;
    }

    .secondary {
        grid-template-columns: 1fr;
    }

    .bottom span {
        font-size: 0.75rem;
    }
}

@media all and (max-width: 320px) {
    .bottom {
        padding: 1em 0;
    }

    .bottom span {
        font-size: 0.75rem;
    }
}
</style>
