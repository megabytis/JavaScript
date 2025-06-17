"use strict";

const hotel = {
    name : "OYO",
    location : "Gohiria sqaure, khurdha-road, BBSR",
    rooms : ['1BHK','2BHK','3BHK'],
    xTraFacility : ['with balcony','with garage','with studyRoom']
};

const location = [hotel.location];

for (const loc of location) {
    console.log(loc);
};

const [firstRoomType, ...otherRoomType] = [...hotel.rooms];
for(const roomType of [firstRoomType,otherRoomType]) {
    console.log(roomType);
}

// usage of entries() built-in method :---------
/*
xTraFacility : ['with balcony','with garage','with studyRoom']

Basically, .entries() function returns each element of the array inside a personal/separate array along with it's index number :) 
*/
for(const xTra of hotel.xTraFacility.entries()) {
    console.log(xTra);
}
/* OUTPUT :---
[ 0, 'with balcony' ]
[ 1, 'with garage' ]
[ 2, 'with studyRoom' ]
*/