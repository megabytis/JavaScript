"use strict";

const secondHand = document.querySelector(".sec-hand");
const minutedHand = document.querySelector(".min-hand");
const hourdHand = document.querySelector(".hour-hand");

function set() {
    const a = new Date();

    // SECONDS
    const seconds = a.getSeconds();
    const secChanges = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secChanges}deg)`;
    // console.log(secChanges);

    // MINUTES
    const minutes = a.getMinutes();
    const minChanges = ((minutes / 60) * 360) + 90;
    minutedHand.style.transform = `rotate(${minChanges}deg)`;

    // HOUR
    const hours = a.getHours();
    const hourChanges = ((hours / 60) * 360) + 90 ;
    hourdHand.style.transform = `rotate(${hourChanges}deg)`;

}
setInterval(set,1000);

// now changing our second hand tikc ticktick :)

