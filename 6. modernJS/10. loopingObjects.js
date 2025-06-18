"use strict";

// Usage of :---
//  Object.keys(obj-name), Object.values(obj-name), Object.entries(obj-name)

// ⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️
// Object.keys(), Object.values() & Object.entries() will give each elements inside ARRAYS

const openingHours = {
        monday : {
            open : '11AM',
            close : '9PM'
        },
        tuesday : {
            open : '9AM',
            close : '6PM'
        },
        friday : {
            open : '10AM',
            close : '7PM'
        },
        saturday : {
            open : '1PM',
            close : '9PM'
        }
}

const hotel = {
    name : "OYO",
    location : "Gohiria sqaure, khurdha-road, BBSR",
    rooms : ['1BHK','2BHK','3BHK'],
    xTraFacility : ['with balcony','with garage','with studyRoom'],
    
    openingHours,

    bookRoom(obj) {
        console.log(obj);
    },

    bookRoom2({roomTypeIndex=0,xTraIndex=0,hotelName="Hotel_TAJ",hotelLocation="Mumbai"}) {
        console.log(`your ${this.rooms[roomTypeIndex]} room ${this.xTraFacility[xTraIndex]} has been booked on ${hotelName} in ${hotelLocation}`);
    }, 

    couplesAllowed : false
};

console.log("____________KEYS___________");
// to access 'KEYS' of an object
console.log(Object.keys(hotel));
console.log(Object.keys(openingHours));

console.log("____________VALUES___________");
// to access 'VALUES' of keys of an Object
console.log(Object.values(hotel));
console.log(Object.values(openingHours));


console.log("___________KEYS & VALUES__________");
// to access / loop over everything inside an object
console.log(Object.entries(hotel));
console.log(Object.entries(openingHours));


console.log("______againHotel______");
// Traversing an Object
const lll = Object.entries(openingHours);
console.log(lll);

for(const [dayname, {open:openTime, close:closeTime}] of lll) {
    console.log(`On ${dayname} we open at ${openTime} & close at ${closeTime}`);
}

