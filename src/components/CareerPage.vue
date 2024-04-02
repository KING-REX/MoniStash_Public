<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import DropDown from "@/components/DropDown.vue"
const stateData = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
]

const positionSuggestions = [
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    },
    {
        position: 'Senior Engineer',
        location: 'Lagos, Nigeria',
        action: 'Apply to Position',
    }
]

const options = ref(stateData);

const parentSelectedOption = ref();
</script>
<template>
    <section>
        <div class="work-with-container">
            <h2 style="font-size: 28px;">Work with us</h2>
            <p style="font-size: 18px;">Working with us gives you a good working environment, fully</p>
            <p style="font-size: 18px;">remote setting and benefits</p>
            <button class="explore">Explore Career Openings</button>
        </div>
        <div class="core-value-container">
            <div class="core-values">
                <h3 class="value-head">Core Values</h3>
                <p>Our Values set the base for our daily operations and decision-making</p>
            </div>
            <div class="value-content-container">
                <div class="content-details">
                    <h5 class="content-header">Reliablity</h5>
                    <p>We commit to providing consistent and dependable
                        solutions to meet the needs of our customers. Trust and dependablility
                        are at the heart of everything we do
                    </p>
                </div>
                <div class="content-details">
                    <h5 class="content-header">Integrity</h5>
                    <p>
                        We value honesty, transparency, and ethical behaviour in all our
                        interactions. we upload high moral standards and act with integrity in
                        delivering our services.
                    </p>
                </div>
                <div class="content-details">
                    <h5 class="content-header">Flexibilty</h5>
                    <p>
                        We embrace adaptability and agility, responding to changing market dynamics
                        and customers demands. we stay flexible to cater to the unique needs of our
                        clients, continuously evolving to provide the best solutions.
                    </p>
                </div>
                <div class="content-details-last">
                    <h5 class="content-header">Innovation</h5>
                    <p>we foster a culture of creativity and encourage Innovation in our products, services, and
                        processes.
                        we strive to stay ahead of the curve by embracing technological advancements
                        and exploring new ideas.</p>
                </div>
            </div>
        </div>
        <div class="position-finder-container">
            <div class="search-position-container">
                <div class="search-pos-location">
                    <input type="text" placeholder="Search Open Position" class="position-searchbar">
                </div>
                <drop-down :options="options" v-model="parentSelectedOption" />
            </div>
        </div>
        <div class="position-suggestions-container">
            <div class="position-suggestions">

                <div class="position-suggestion" v-for="(position, index) in positionSuggestions" :key="index">
                    <div class="position-specifics">

                        <h3 class="position">{{ position.position }}</h3>
                        <p class="location">{{ position.location }}</p>
                        <hr class="horizontal-rule" />
                    </div>
                    <div class="action-container">
                        <a class="action" href="#">{{ position.action }}</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="summit-container">
            <div class="news-letter">
                <h3 class="heading">Our Awesome NewsLetter</h3>
                <p>Be the first one to know about discount offers and events.</p>
            </div>
            <div class="form-container">
                <input type="text" name="email" placeholder="Enter your email" class="form" />
                <button type="button" class="button">Summit</button>
            </div>
        </div>
    </section>
</template>






<style scoped>
section .work-with-container {
    text-align: center;
    margin-top: 3%;
    margin-bottom: 3%;
}

section .explore {
    height: 30px;
    margin-top: 1%;
    padding-left: 1%;
    padding-right: 1%;
    background-color: #4ea18e;
    border: none;
    border-radius: 5px;
}

section .coreValues {
    text-align: center;
}

section .value-head {
    font-size: 170%;
}

section .core-values {
    text-align: center;
    color: white;
    padding-top: 2%;
    padding-bottom: 2%;
}

section .core-value-container {
    background-color: #1D2c3c;
    height: 320px;

}

section .value-content-container {
    display: flex;
    flex-direction: row;
    width: 99%;
    margin-left: auto;
    margin-right: auto;
}

section .content-details {
    border-right: solid white;
    margin-left: 1%;
    margin-right: 1%;
    color: white;
}

section .content-details-last {
    margin-left: 1%;
    margin-right: 1%;
    color: white;
}

section .content-header {
    font-size: 110%;
    padding-bottom: 6%;
}

.position-finder-container {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.search-position-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.search-pos-location {
    outline: none;
    width: 15%;
}



.search-pos-location .position-searchbar {
    padding: 17px;
    background-color: #F9F9FA;
    border: none;
    width: 100%;
    border-radius: 0.8rem;
}

.search-pos-location .position-searchbar::placeholder {
    color: black;
}

.search-pos-location .position-searchbar:focus {
    outline: none;
    border: none;
}

section .horizontal-rule {
    margin-top: 5%;
    width: 120%;

}

.position-suggestions-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    height: 900px;
}

.position-suggestions {
    width: 45%;
    border: 1px solid #bdbbbb;
    border-radius: 0.7rem;
    height: 90%;
    overflow: scroll;
}

.position-suggestions {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.position-suggestions::-webkit-scrollbar {
    display: none;
}

.position-suggestion {
    padding: 2.5rem;
    display: flex;
}

.position-specifics {
    width: 85%;
}

.action-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

section .summit-container {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    margin-top: 12%;
    margin-bottom: 3%;
    margin-left: 26%;
    margin-right: 26%;
    height: 130px;
    background-color: #4ea18e;
    border-radius: 10px;
}

section .news-letter {
    color: white;
    margin-left: 6%;
    margin-top: 2%;
}

section .form-container {
    margin-top: 3%;
    margin-left: 7%;
    padding-bottom: 3%;
    position: relative;
    width: 35%;
}

section .form {
    background-color: #3f8e7b;
    border: 2px #3f8e7b;
    height: 100%;
    width: 100%;
    border-radius: 20px;
}

::placeholder {
    color: white;
    padding-left: 3%;
}

section .heading {
    font-size: 160%;
}

section .button {
    position: absolute;
    right: 0;
    height: 50%;
    margin-top: 3%;
    margin-right: 2%;
    width: 45%;
    border-radius: 10px;
    outline: none;
    border: none;
}
</style>
