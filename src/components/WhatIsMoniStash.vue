<script setup lang="ts"></script>
<template>
    <section>
        <div class="ab-Container">
            <h3 class="aboutUs">About <span class="Us">Us</span></h3>
            <p>MoniStash is a saving platform that focuses on helping you save and grow your Usdt.</p>
            <p>USDT is a stablecoin cryptocurrency that is pegged to the value of the Us dollar.</p>
        </div>
         <h4 class="text-header">What is <span class="MS">MoniStash</span></h4>
        <div class="card">
            <div class="text-container">
                <p class="explanation">MoniStash is a  savings platform that focuses on helping you save and grow your USDT. 
                    USDT is a stablecoin cryptocurrency that is pegged to the value of the US dollar. 
                </p>

<p>As a USDT saving company, MoniStash provides various services to assist customers in effectively managing their USDT holdings. 
    These services may include: </p>

<p>1. USDT Savings Account: MoniStash offers a secure and transparent platform where customers can deposit their USDT and 
earn competitive interest rates over time. By saving their USDT with Monistash, customers can potentially grow their holdings 
and increase their overall wealth. </p>

<p>2. Buy/ Sell Crypto: MoniStash provide buy/ Sell Crypto tools to help customers consistently buy and Sell Crypto. 
    These tools can be customised to fit individual buy/ Sell Crypto goals and preferences.</p>

<p>3. Client Testimonials and Success Stories: We have successfully helped many clients navigate the world of both fiat and cryptocurrency. They have reported achieving their investment goals and 
 from the diverse opportunities available in both markets. We prioritise client satisfaction and
 have received positive testimonials from individuals who have experienced significant growth in their portfolios through our services.</p>

<p>4. Risk Management: MoniStash may offer risk management solutions to help customers protect their USDT holdings against market 
volatility. This can include strategies such as diversification, hedging, or other risk mitigation techniques. 
The aim is to minimise potential losses and preserve the value of the USDT savings.</p>

<p>5. Financial Education: MoniStash may provide educational resources and insights to help customers make informed decisions regarding their USDT savings. This can include market analysis, 
investment strategies, and general financial literacy content. By empowering customers with knowledge, 
MoniStash aims to enable them to make better financial choices.</p>

<p>Overall, MoniStash endeavours to be a trusted partner in helping individuals save, grow, and protect their USDT holdings. By providing reliable services and fostering financial education,
 MoniStash aims to assist customers in achieving their financial goals and building long-term wealth through USDT savings.</p>
            </div>
            <div class="image-container">
                <div class="image">
                    <img src="@/assets/WhatIsMoniStash.png" alt="" />
                </div>
            </div>
        </div>
        <div class="summitContainer">
            <div class="newLetter">
                <h3 class="heading">Our Awesome NewsLetter</h3>
                <p>Be the first one to know about discount offers and events.</p>
            </div>
            <div class="formContainer">
                    <input type="text"  name="email" placeholder="Enter your email" class="form" >
                 <button type="button" class="button">Summit</button>
            </div>
        </div>
        
    </section>
</template>
<style scoped>

section .ab-Container{
    text-align: center;
    height: 210px;
    background: rgb(247,241,227);
    background: linear-gradient(184deg, rgba(247,241,227,1) 17%, rgba(250,250,250,1) 50%, rgba(250,250,250,1) 75%, rgba(232,244,237,1) 86%);
}

section .aboutUs{
    font-size: 230%;
    padding-top: 2.5%;
}

section .Us{
    color:#4EA18E;
}
section .text-header {
    margin-left: 3%;
    margin-top: 2%;
    font-size: 140%;
}
section .MS{
    color:#4EA18E;
}
section .card {
        display: flex;
        flex-direction: row;
        margin-left: 3%;
        margin-right: 3%;
        margin-top: 2%;
 }

 /* @media (max-width: 414px) {
    section .card {
        display: flex;
        flex-direction: column-reverse;
    }

     section .image-container {
        height: fit-content;
        height: 3000%;
    }

  }  */

 section .text-container {
    font-size: 125%;
    width: 50%;
    text-align: justify;
 }
 section .explanation{
    margin-right: 30%;
 }

 section .image-container{
    margin-left: 10%;
    z-index: 2;
    position: relative;
 }
 section .image{
    border: solid antiquewhite;
    border-radius: 2%;
    background-color: antiquewhite;
    height: auto;
    max-width: 100%;
    position: relative;
    /* box-shadow: 10px 10px 0 1px green; */
}

section .image::after{
    content: "";
    /* display: block; */
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    border: 1px solid green;
    border-radius: 2%;
    z-index: -1;
 }

 section .summitContainer{
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    margin-top: 12%;
    margin-bottom: 3%;
    margin-left: 26%;
    margin-right: 26%;
    height: 130px;
    background-color: #4EA18E;
    border-radius: 10px;
 }

 section .newLetter{
    color: white;
    margin-left: 6%;
    margin-top: 2%;
 }

 section .formContainer{
    margin-top: 3%;
    margin-left: 7%;
    padding-bottom: 3%;
    position: relative;
    width: 35%;
 }

 section .form{
    background-color: #3F8E7B;
    border: 2px #3F8E7B;
    height: 100%;
    width: 100%;
    border-radius: 20px;
 }
  ::placeholder {
        color: white;
        padding-left: 3%;
    }

    section .heading{
        font-size: 160%;
    }

    section .button{
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