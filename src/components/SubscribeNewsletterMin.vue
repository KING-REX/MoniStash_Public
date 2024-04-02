<template>
    <div class="call-to-action-container">
        <section class="call-to-action">
            <div class="writeup">
                <h2>Our Awesome Newsletter</h2>
                <p>Be the first one to know about discounts, offers and events</p>
            </div>
            <form action="">
                <div class="content">
                    <input type="email" id="subscriptionEmail" placeholder="Enter your email" />
                    <button>Submit</button>
                </div>
            </form>
        </section>
    </div>
</template>

<style scoped>
/* CALL TO ACTION SECTION STYLES ******************************* */
.call-to-action-container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: #fafafa;
}
section.call-to-action {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    background-color: #25a18e;
    padding: 50px;
    /* margin: 100px 300px 0; */
    border-radius: 8px;
    margin: 100px 0 0;
    width: 60%;
}
section.call-to-action .writeup {
    display: flex;
    flex-direction: column;
}
section.call-to-action h2 {
    color: #fff;
    font-size: 1.6rem;
}
section.call-to-action p {
    color: #fff;
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
    cursor: pointer;
}
section.call-to-action form button:focus {
    outline: none;
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
