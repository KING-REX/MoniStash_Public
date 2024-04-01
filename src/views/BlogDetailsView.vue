<script setup lang="ts">
import IconSend from '@/components/icons/IconSend.vue'
import BlogNav from './sections/blog/BlogNav.vue'
import SubscribeNewsletter from '@/components/SubscribeNewsletter.vue'
import IconEye from '@/components/icons/IconEye.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import IconSpiral4 from '@/components/icons/IconSpiral4.vue'
</script>
<template>
    <IconSpiral4 class="blur" />
    <BlogNav />

    <main class="container">
        <header>
            <span class="tag">Featured Post</span>
            <div class="details">
                <span class="timestamp">Oct 20, 2024 11:30</span>
                <span class="duration">8 minute read</span>
            </div>
            <h1>Digital Asset as an Investment</h1>
            <div class="contents">
                <h2>Blog Contents</h2>
                <nav>
                    <ul>
                        <li><a href="#sec1">Why assets</a></li>
                        <li><a href="#sec2">Compounding assets</a></li>
                        <li><a href="#sec3">Assets as an investment</a></li>
                        <li><a href="#sec4">Why assets</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <div class="content">
            <div class="img-container">
                <!-- <img src="images/featured.jpeg" alt=""> -->
            </div>
            <div class="text-container">
                <section id="sec1">
                    <h2>Why assets</h2>
                    <p>
                        it's essential to approach these investments with caution and a clear
                        understanding of the risks and potential rewards. Here's a breakdown of the
                        key considerations when viewing digital assets as an investment...
                    </p>
                    <p>
                        it's essential to approach these investments with caution and a clear
                        understanding of the risks and potential rewards. Here's a breakdown of the
                        key considerations when viewing digital assets as an investment...
                    </p>
                </section>

                <section id="sec2">
                    <h2>Compounding assets</h2>
                    <p>
                        it's essential to approach these investments with caution and a clear
                        understanding of the risks and potential rewards. Here's a breakdown of the
                        key considerations when viewing digital assets as an investment...
                    </p>
                </section>

                <section id="sec3">
                    <h2>Assets as an investment</h2>
                    <p>
                        it's essential to approach these investments with caution and a clear
                        understanding of the risks and potential rewards. Here's a breakdown of the
                        key considerations when viewing digital assets as an investment...
                    </p>
                    <p>
                        it's essential to approach these investments with caution and a clear
                        understanding of the risks and potential rewards. Here's a breakdown of the
                        key considerations when viewing digital assets as an investment...
                    </p>
                </section>

                <section id="sec4">
                    <h2>Why assets</h2>
                    <p>
                        it's essential to approach these investments with caution and a clear
                        understanding of the risks and potential rewards. Here's a breakdown of the
                        key considerations when viewing digital assets as an investment...
                    </p>
                </section>
            </div>

            <div class="details">
                <span class="send-count">
                    <!-- <img src="images/icons/send.svg" class="icon" alt="Send icon" /> -->
                    <IconSend class="icon" />&nbsp; 23k
                </span>
                <span class="views-count">
                    <!-- <img src="images/icons/eye.svg" class="icon" alt="Views icon" /> -->
                    <IconEye class="icon" />
                    60.5k
                </span>
            </div>
        </div>
    </main>

    <section class="more-blogs container">
        <a href="#" class="more">
            <span>See other Blog Posts on Crypto</span>&nbsp;&nbsp;
            <!-- <img src="images/icons/right-arrow.svg" alt="Right arrow" /> -->
            <IconChevronRight />
        </a>
    </section>

    <SubscribeNewsletter />
</template>
<style scoped>
.blur {
    position: absolute;
    top: -7em !important;
    left: 0;
    width: 500px;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 120px;
}
a {
    text-decoration: none;
}

/* MAIN HEADER SECTION STYLES ************************************* */

main.container {
    padding-top: 50px;
    padding-bottom: 50px;
    margin-bottom: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
main header {
    margin-bottom: 50px;
}
main header .tag {
    border-radius: 15px;
    background-color: rgba(37, 161, 142, 0.1);
    color: #25a18e;
    padding: 5px 10px;
    font-size: 0.85rem;
    display: block;
    width: fit-content;
    margin-bottom: 10px;
}
main header .details {
    font-size: 0.9rem;
    color: #222;
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 50px;
}
main header h1 {
    font-size: 2.1rem;
    margin-bottom: 50px;
    color: #222;
    text-align: center;
}
main header .contents {
    display: flex;
    gap: 30px;
    align-items: center;
    background-color: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 20px;
    border-radius: 8px;
}
main header h2 {
    width: calc((100% - 30px) / 3);
    font-size: 1.2rem;
}
main header nav {
    width: calc(((100% - 30px) / 3) * 2);
}
main header nav ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
main header nav li {
    width: 50%;
    height: 40px;
    color: #1070ca;
}
main header nav a {
    color: #1070ca;
}

/* MAIN CONTENT SECTION ********************************************** */

main .content .img-container {
    padding-bottom: 34%;
    background-image: url('@/assets/blog_post_featured_image.jpeg');
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    margin-bottom: 50px;
}

main .content .text-container {
    margin-bottom: 50px;
}
main .content .text-container section {
    margin-bottom: 30px;
}
main .content .text-container section h2 {
    font-size: 1.7rem;
    margin-bottom: 20px;
}
.text-container section p {
    font-size: 1.1rem;
    line-height: 1.8rem;
    margin-bottom: 10px;
}
main .content .details {
    display: flex;
    gap: 15px;
}
main .content .details .send-count {
    display: flex;
    align-items: center;
}
main .content .details .views-count svg {
    width: 20px;
    vertical-align: middle;
}

/* MORE BLOG LINK STYLES ********************************** */

section.more-blogs {
    color: #1070ca;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 50px;
}
section.more-blogs a {
    color: #1070ca;
}
section.more-blogs svg {
    vertical-align: middle;
}

@media (max-width: 1024px) {
    .blur {
        top: -10em !important;
        width: 300px;
    }
    .container {
        padding: 0 20px;
    }

    nav#blogNav {
        gap: 10px;
    }
    nav#blogNav .links {
        gap: 10px;
    }

    section.call-to-action {
        margin: 0 20px 50px;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 10px;
    }

    nav#blogNav {
        flex-direction: column;
        gap: 20px;
        padding: 20px 10px;
    }
    nav#blogNav .links {
        gap: 20px;
        overflow-x: auto;
        width: 100%;
    }
    nav#blogNav .link {
        flex-shrink: 0;
    }
    nav#blogNav #searchBlogForm .form-field {
        width: 400px;
    }

    main header .contents {
        align-items: flex-start;
        gap: 20px;
    }
    main header h2 {
        font-size: 1.1rem;
        width: 40%;
    }
    main header nav {
        width: 60%;
    }
    main header nav ul {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    main header nav li {
        width: 100%;
    }

    main .content .img-container {
        padding-bottom: 56%;
    }
    main .content .details {
        justify-content: center;
    }

    section.call-to-action {
        padding: 50px 20px;
    }
    section.call-to-action p {
        text-align: center;
    }
    section.call-to-action form {
        align-self: stretch;
    }
    section.call-to-action form .content {
        width: 100%;
    }
}

@media (max-width: 425px) {
    nav#blogNav #searchBlogForm {
        width: 100%;
    }
    nav#blogNav #searchBlogForm .form-field {
        width: 100%;
    }

    section.call-to-action h2 {
        font-size: 1.4rem;
    }
}
</style>
