"use strict";

const hotel = {
    name : "OYO",
    location : "Gohiria sqaure, khurdha-road, BBSR",
    rooms : ['1BHK','2BHK','3BHK'],
    xTraFacility : ['with balcony','with garage','with studyRoom'],
    openingHours : {
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
    },

    bookRoom : function(hotelName,hotelLocation,roomTypeIndex,xTraIndex) {
        console.log(`your ${this.rooms[roomTypeIndex]} room ${this.xTraFacility[xTraIndex]} has been booked on ${hotelName} in ${hotelLocation}`);
    },
};

/*
Let's suppose we don't know that on which day hotel is open, on which day it is close
if we'll just type ;
*/
// console.log(hotel.openingHours.Wednesday);
// it will give undefined 
// nd if we'll try to log ;
// console.log(hotel.openingHours.Wednesday.open);
// now it will give error , 
// so to avoid it , OPTION CHAINING is there -----------

const weekDays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
for(const days of weekDays) {
    const openOrNot = hotel.openingHours[days]?.open ?? 'closed';
    console.log(`${days}: ${openOrNot}`);
}

// ⚠️⚠️⚠️ MOST MOST IMPORTANT ⚠️⚠️⚠️
/*
Here i placed an '?.' after 'hotel.openingHours[days]' in openOrNot,
that is optional chaining 
it first checks wheather hotel.openingHours[days] i.e. openingHours[sunday],openingHours[monday].....like this r actaully present or not 
if present then aageee badhoooo.:)
otherwise it will give 'undefined' nd '??' operator will print 'closed' which is a NON_NULL value.
*/

// so if we don't want to recieve 'error', have to use optional chaining '?' just after the element where we ave doubt :)
// it won't move forward until the element is present 

// OPTIONAL CHAIN on Methods
hotel.bookRoom?.('OYO',"BBSR",0,1) ?? "bookRoom function doesn't exist.";
// say like this :- if hotel.bookRoom exists then take these arguments , otherwise it will return 'undefined', so '??' will print next NON_NULL value i.e. the next string

hotel.bookRoooooom?.('OYO',"BBSR",0,1) ?? console.log("bookRoooooom function doesn't exist.");
;

// OPTIONAL CHAINING in ARRAYS
const sampleArray = [{"name": "Miku", "Age": 21, "Grad": "BCA"}];

// Manual method
if(sampleArray.length > 0) {
    console.log(sampleArray[0].name); 
}
else {
    console.log("name not +nt");
}
// Advanced optional chaining method :)
console.log(sampleArray[0]?.name ?? "Name doesn't exist");
