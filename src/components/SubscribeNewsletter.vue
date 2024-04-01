<template>
    <section class="call-to-action">
        <h2>Our Awesome Newsletter</h2>
        <p>Be the first one to know about discounts, offers and events</p>
        <form action="">
            <div class="content">
                <input type="text" id="subscriptionEmail" placeholder="Enter your email" />
                <button>Submit</button>
            </div>
        </form>

        <div class="vectors">
            <img src="@/assets/vector1.svg" alt="" />
            <img src="@/assets/vector2.svg" alt="" />
            <img src="@/assets/vector3.svg" alt="" />
        </div>
    </section>
</template>

<style scoped>
/* CALL TO ACTION SECTION STYLES ******************************* */

section.call-to-action {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #25a18e;
    padding: 50px;
    margin: 0 30px 50px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    position: relative;
    overflow: hidden;
}
section.call-to-action h2 {
    color: #fff;
    font-size: 1.6rem;
    margin-bottom: 25px;
}
section.call-to-action p {
    color: #fff;
    margin-bottom: 30px;
    font-size: 0.9rem;
}
section.call-to-action form .content {
    display: flex;
    justify-content: space-between;
    padding: 5px 8px;
    border-radius: 8px;
    background-color: #0f8e7b;
    width: 450px;
}
section.call-to-action form input#subscriptionEmail {
    border: none;
    background-color: transparent;
    color: #fff;
    padding: 5px;
}
section.call-to-action form input#subscriptionEmail:focus {
    outline: none;
}
section.call-to-action form input#subscriptionEmail::placeholder {
    color: #fff;
}
section.call-to-action form button {
    border: none;
    background-color: #fff;
    color: #25a18e;
    padding: 12px 35px;
    border-radius: 8px;
    font-size: 1.05rem;
}
section.call-to-action form button:focus {
    outline: none;
}
section.call-to-action .vectors img {
    position: absolute;
    pointer-events: none;
    user-select: none;
}
section.call-to-action .vectors img:nth-of-type(1) {
    top: -30px;
    left: -30px;
}
section.call-to-action .vectors img:nth-of-type(2) {
    top: -30px;
    right: -30px;
}
section.call-to-action .vectors img:nth-of-type(3) {
    bottom: -30px;
    right: -30px;
}

@media (max-width: 1024px) {
    section.call-to-action {
        margin: 0 20px 50px;
    }
}

@media (max-width: 768px) {
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
    section.call-to-action h2 {
        font-size: 1.4rem;
    }
}
</style>
