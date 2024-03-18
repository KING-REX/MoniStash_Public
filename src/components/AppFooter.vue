<script setup lang="ts"></script>
<template>
    <footer>
        <div class="container">
            <div class="top">
                <div class="primary">
                    <div class="logo">
                        <img src="@/assets/logo_full.svg" alt="MoniStash Logo" />
                    </div>
                    <span class="write-up"
                        >MoniStash is a cryptocurrency services company and a product of MoniStash
                        Limited with RC: 7252518</span
                    >
                </div>
                <div class="secondary">
                    <ul class="headings">
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
                    </ul>
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
    height: 59vh;
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

.logo img {
    transform: scale(1.35);
    transform-origin: 0 0;
}

.primary {
    display: flex;
    flex-direction: column;
    gap: 1.8em;
    justify-content: flex-start;
    width: 32%;
}

.write-up {
    font-size: 1.34rem;
    line-height: 1.7;
}

.secondary {
    flex-grow: 1;
}

ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 0.9fr 0.45fr;
    /* row-gap: 1em; */
}

.headings {
    color: #17293b;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    font-weight: 500;
}

.links-container li {
    padding: 0.5em 0;
}

.links-container a {
    color: inherit;
}

hr {
    border-color: #ececf1;
    border-style: solid;
}

.bottom {
    display: flex;
    justify-content: space-between;
    padding-top: 2.5em;
}
</style>
