<script setup lang="ts">
import BlogNav from './sections/blog/BlogNav.vue'
import SubscribeNewsletter from '@/components/SubscribeNewsletter.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
import IconLink from '@/components/icons/IconLink.vue'
import IconSend from '@/components/icons/IconSend.vue'
import IconSpiral4 from '@/components/icons/IconSpiral4.vue'

// const featuredPosts = []
// const featuredPostLimit = 1
// const posts: BlogPost[] = []
// const postPreviewLimit = 12
</script>

<template>
    <IconSpiral4 class="blur" />
    <BlogNav />
    <header class="main container">
        <h1>
            <div class="line1">Moon Updates</div>
            <div class="line2">From <span>MoniStash</span></div>
        </h1>
        <p>Latest Updates from monistach on how best to trade, Save and compound your Assets</p>
    </header>

    <section class="featured container">
        <header>
            <h2>Featured</h2>
            <a href="#" class="more">
                <span>see more</span>
                <!-- <img src="images/icons/right-arrow.svg" alt="Right arrow" /> -->
                <IconChevronRight />
            </a>
        </header>
        <div class="content">
            <div class="post">
                <div class="img-container">
                    <!-- <img src="@/assets/blog_post_featured_image.jpeg" alt="" /> -->
                </div>
                <div class="text-container">
                    <span class="tag">Featured Post</span>
                    <h3>Digital Asset as an Investment</h3>
                    <p>
                        it's essential to approach these investments with caution and a clear
                        understanding of the risks and potential rewards. Here's a breakdown of the
                        key considerations when viewing digital assets as an investment...
                    </p>
                    <div class="details">
                        <div class="first">
                            <span class="timestamp">Oct 20</span>
                            <span class="duration">8min read</span>
                        </div>
                        <div class="second">
                            <span class="send-count">
                                <!-- <img src="images/icons/send.svg" class="icon" alt="Send icon" /> -->
                                <IconSend class="icon" />
                                23k
                            </span>
                            <span class="copy-link">
                                <!-- <img src="images/icons/link.svg" class="icon" alt="Copy icon" /> -->
                                <IconLink class="icon" />
                                Copy link
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="recommended container">
        <header>
            <h2>Recommended</h2>
            <a href="#" class="more">
                <span>see more</span>
                <!-- <img src="images/icons/right-arrow.svg" alt="Right arrow" /> -->
                <IconChevronRight />
            </a>
        </header>

        <div class="content">
            <div class="post">
                <div class="img-container">
                    <img src="@/assets/blog_post_image_1.jpeg" alt="" />
                </div>
                <div class="text-container">
                    <h3>Digital Asset as an Investment</h3>
                    <div class="details">
                        <div class="first">
                            <span class="timestamp">Oct 20</span>
                            <span class="duration">8min read</span>
                        </div>
                        <div class="second">
                            <span class="send-count">
                                <!-- <img src="images/icons/send.svg" class="icon" alt="Send icon" /> -->
                                <IconSend class="icon" />
                                23k
                            </span>
                            <span class="copy-link">
                                <!-- <img src="images/icons/link.svg" class="icon" alt="Copy icon" /> -->
                                <IconLink class="icon" />
                                Copy link
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="img-container">
                    <img src="@/assets/blog_post_image_2.jpeg" alt="" />
                </div>
                <div class="text-container">
                    <h3>Digital Asset as an Investment</h3>
                    <div class="details">
                        <div class="first">
                            <span class="timestamp">Oct 20</span>
                            <span class="duration">8min read</span>
                        </div>
                        <div class="second">
                            <span class="send-count">
                                <!-- <img src="images/icons/send.svg" class="icon" alt="Send icon" /> -->
                                <IconSend class="icon" />
                                23k
                            </span>
                            <span class="copy-link">
                                <!-- <img src="images/icons/link.svg" class="icon" alt="Copy icon" /> -->
                                <IconLink class="icon" />
                                Copy link
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="img-container">
                    <img src="@/assets/blog_post_image_3.jpeg" alt="" />
                </div>
                <div class="text-container">
                    <h3>Digital Asset as an Investment</h3>
                    <div class="details">
                        <div class="first">
                            <span class="timestamp">Oct 20</span>
                            <span class="duration">8min read</span>
                        </div>
                        <div class="second">
                            <span class="send-count">
                                <!-- <img src="images/icons/send.svg" class="icon" alt="Send icon" /> -->
                                <IconSend class="icon" />
                                23k
                            </span>
                            <span class="copy-link">
                                <!-- <img src="images/icons/link.svg" class="icon" alt="Copy icon" /> -->
                                <IconLink class="icon" />
                                Copy link
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="img-container">
                    <img src="@/assets/blog_post_image_4.jpeg" alt="" />
                </div>
                <div class="text-container">
                    <h3>Digital Asset as an Investment</h3>
                    <div class="details">
                        <div class="first">
                            <span class="timestamp">Oct 20</span>
                            <span class="duration">8min read</span>
                        </div>
                        <div class="second">
                            <span class="send-count">
                                <!-- <img src="images/icons/send.svg" class="icon" alt="Send icon" /> -->
                                <IconSend class="icon" />
                                23k
                            </span>
                            <span class="copy-link">
                                <!-- <img src="images/icons/link.svg" class="icon" alt="Copy icon" /> -->
                                <IconLink class="icon" />
                                Copy link
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="img-container">
                    <img src="@/assets/blog_post_image_5.jpeg" alt="" />
                </div>
                <div class="text-container">
                    <h3>Digital Asset as an Investment</h3>
                    <div class="details">
                        <div class="first">
                            <span class="timestamp">Oct 20</span>
                            <span class="duration">8min read</span>
                        </div>
                        <div class="second">
                            <span class="send-count">
                                <!-- <img src="images/icons/send.svg" class="icon" alt="Send icon" /> -->
                                <IconSend class="icon" />
                                23k
                            </span>
                            <span class="copy-link">
                                <!-- <img src="images/icons/link.svg" class="icon" alt="Copy icon" /> -->
                                <IconLink class="icon" />
                                Copy link
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="img-container">
                    <img src="@/assets/blog_post_featured_image.jpeg" alt="" />
                </div>
                <div class="text-container">
                    <h3>Digital Asset as an Investment</h3>
                    <div class="details">
                        <div class="first">
                            <span class="timestamp">Oct 20</span>
                            <span class="duration">8min read</span>
                        </div>
                        <div class="second">
                            <span class="send-count">
                                <!-- <img src="images/icons/send.svg" class="icon" alt="Send icon" /> -->
                                <IconSend class="icon" />
                                23k
                            </span>
                            <span class="copy-link">
                                <!-- <img src="images/icons/link.svg" class="icon" alt="Copy icon" /> -->
                                <IconLink class="icon" />
                                Copy link
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="img-container">
                    <img src="@/assets/blog_post_image_1.jpeg" alt="" />
                </div>
                <div class="text-container">
                    <h3>Digital Asset as an Investment</h3>
                    <div class="details">
                        <div class="first">
                            <span class="timestamp">Oct 20</span>
                            <span class="duration">8min read</span>
                        </div>
                        <div class="second">
                            <span class="send-count">
                                <!-- <img src="images/icons/send.svg" class="icon" alt="Send icon" /> -->
                                <IconSend class="icon" />
                                23k
                            </span>
                            <span class="copy-link">
                                <!-- <img src="images/icons/link.svg" class="icon" alt="Copy icon" /> -->
                                <IconLink class="icon" />
                                Copy link
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="img-container">
                    <img src="@/assets/blog_post_image_3.jpeg" alt="" />
                </div>
                <div class="text-container">
                    <h3>Digital Asset as an Investment</h3>
                    <div class="details">
                        <div class="first">
                            <span class="timestamp">Oct 20</span>
                            <span class="duration">8min read</span>
                        </div>
                        <div class="second">
                            <span class="send-count">
                                <!-- <img src="images/icons/send.svg" class="icon" alt="Send icon" /> -->
                                <IconSend class="icon" />
                                23k
                            </span>
                            <span class="copy-link">
                                <!-- <img src="images/icons/link.svg" class="icon" alt="Copy icon" /> -->
                                <IconLink class="icon" />
                                Copy link
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    padding: 0 40px;
}
a {
    text-decoration: none;
}

/* MAIN HEADER STYLES *************************************** */

header.main {
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 20px;
}
header.main h1 .line1 {
    color: #5b5b86;
    font-size: 0.9rem;
    font-weight: normal;
    margin-bottom: 10px;
}
header.main h1 .line2 {
    margin-bottom: 10px;
    font-size: 2.3rem;
}
header.main h1 .line2 span {
    color: #25a18e;
    font-style: italic;
}
header.main p {
    color: #222;
    font-size: 0.9rem;
}

/* FEATURED AND RECOMMENDED SECTION STYLES ****************************** */

section.featured,
section.recommended {
    margin-bottom: 50px;
}
section.featured header,
section.recommended header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}
section.featured h2,
section.recommended h2 {
    font-size: 1.4rem;
}
section.featured .more,
section.recommended .more {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #1070ca;
    font-size: 1rem;
}

/* POST CARD STYLES ****************************** */

.post {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    box-shadow:
        rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.1) 0px 0px 0px 1px;
    border-radius: 8px;
}
.post .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}
.post .text-container .tag {
    border-radius: 15px;
    background-color: rgba(37, 161, 142, 0.1);
    color: #25a18e;
    padding: 5px 10px;
    font-size: 0.85rem;
    margin-bottom: 20px;
}
.post .text-container h3 {
    font-size: 2.3rem;
    margin-bottom: 20px;
    color: #222;
}
.post .text-container p {
    font-size: 0.9rem;
    margin-bottom: 20px;
}
.post .text-container .details {
    font-size: 0.85rem;
    color: gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
}
.post .text-container .details .first,
.post .text-container .details .second {
    display: flex;
    gap: 8px;
    align-items: center;
}
.post .text-container .details .icon {
    vertical-align: middle;
    /* margin-right: 1px; */
}
.post .send-count,
.post .copy-link {
    cursor: pointer;
}

/* FEATURED SECTION STYLES ****************************** */

section.featured .post {
    padding: 50px;
}
section.featured .post .img-container {
    width: 35%;
    padding-bottom: 34%;
    background-image: url('@/assets/blog_post_featured_image.jpeg');
    background-position: center;
    background-size: cover;
    border-radius: 8px;
}
section.featured .post .text-container {
    width: 65%;
    padding: 0 50px;
}

/* RECOMMENDED POSTS SECTION STYLES ******************* */

section.recommended .content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
section.recommended .post {
    flex-direction: column;
    width: calc((100% - 60px) / 3);
}
section.recommended .post .img-container {
    width: 100%;
}
section.recommended .post .img-container img {
    width: 100%;
    margin-bottom: 30px;
    border-radius: 8px;
}
section.recommended .post .text-container h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
}
section.recommended .post .text-container .details {
    font-size: 0.8rem;
}

@media (max-width: 1024px) {
    .blur {
        top: -10em !important;
        width: 300px;
    }
    .container {
        padding: 0 20px;
    }

    section.featured h2,
    section.recommended h2 {
        font-size: 1.2rem;
    }

    section.featured .post {
        padding: 20px;
    }
    section.featured .post .text-container {
        padding: 0 20px;
    }
    section.featured .post .text-container h3 {
        font-size: 2rem;
    }

    section.recommended .post {
        width: calc((100% - 30px) / 2);
    }
    section.recommended .post .text-container h3 {
        font-size: 1.2rem;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 10px;
    }

    section.featured .post {
        flex-direction: column;
        gap: 30px;
        align-items: flex-start;
        padding: 5px;
    }
    section.featured .post .img-container {
        width: 100%;
        padding-bottom: 56%;
    }
    section.featured .post .text-container {
        width: 100%;
        padding: 15px;
    }
    section.featured .post .text-container .details {
        font-size: 0.8rem;
    }

    section.recommended .post {
        width: 100%;
        padding: 20px;
    }
    section.recommended .post .text-container {
        align-self: stretch;
    }
}

@media (max-width: 425px) {
    section.recommended .post .text-container h3 {
        font-size: 1.05rem;
    }
}
</style>
