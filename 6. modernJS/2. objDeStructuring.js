'use strict';

// object deStructuring means unpacking of object

// ⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️
// to create object we user {}, so to destructure object we'll also use {}

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

    bookRoom : function(obj) {
        console.log(obj);
    },

    bookRoom2 : function({roomTypeIndex=0,xTraIndex=0,hotelName="Hotel_TAJ",hotelLocation="Mumbai"}) {
        console.log(`your ${this.rooms[roomTypeIndex]} room ${this.xTraFacility[xTraIndex]} has been booked on ${hotelName} in ${hotelLocation}`);
    },
    // here i've added some default values in obj param, it will be logged incase if no obj arg would be passed during function call . 

    couplesAllowed : false
};

// ------------------------------------------------------------------
// Obj / Obj instances passing to a Function 
hotel.bookRoom({
    roomTypeIndex: 1,
    xTraIndex: 0,
    hotelName: "Santi Hotel",
    hotelLocation: "Patrapada,Angul"
});

hotel.bookRoom2({
    roomTypeIndex: 1,
    xTraIndex: 0,
    hotelName: "Santi Hotel",
    hotelLocation: "Patrapada,Angul"
})
//here i passed an object with their instances in {}, so we have to receive them also using {} in function declaration...

// ------------------------------------------------------------------
// ⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️
/*
array ରେ indexing possible ଥିଲା ବୋଲି ଆମେ array ର ଯେଉଁ index ର value କୁ access କରିବାକୁ ଚାହୁଁଥିଲେ  ଠିକ ସେଇ index position ରେ ଗୋଟେ const [variable] ଲେଖିଦେଲେ, array value ଟା ପଳେଇ ଆସିଲା  |
but here in case of objects, INDEXING NOT possible
& everything r in 'key : value' pair manner,
so to access any value we have to take exact 'key' name
*/
const {name,openingHours} = hotel;
console.log(openingHours,name);

// but to keep those 'values' in another variable we have to create another 'KEY VARIABLE NAME' name using ' CURRENT EXACT KEY NAME'
// syntax :--- const {<exact_key_name> : <new_key_variable>}

// example :-
const {
    name: hotelName, 
    rooms: roomTypes
} = hotel;
console.log(hotelName,roomTypes);

// ------------------------------------------------------------------
// DEFAULT VALUE 
const {xTraFacility: xTra=[]} = hotel;
console.log(xTra);

// ----------------------------------------------------------------------
// Mutating Variables
let a = 90;
let b = 78;
const sampleObj = {
    a : 111,
    b : 234,
    c : 999
};

({a,b} = sampleObj);
// here we have to add parenthesis '()' while destructuring + mutating
// ⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️
// 📌 Rule:
// - When declaring + assigning: `let {a, b} = obj` → NO parentheses needed
// - When reassigning/mutating: `({a, b} = obj)` → YES, use parentheses , but....
// 🧠 but Why?
// Because `{a, b}` looks like a code block to JavaScript.
// adding Parentheses '()' force JS to parse it as a destructuring assignment.
console.log(a,b);

// --------------------------------------------------------------------
// Nested objects
const {friday: fri} = openingHours;
console.log(fri);

const {saturday:{open,close}} = hotel.openingHours;
console.log(open,close);

const {monday: {open: o, close: c}} = openingHours;
console.log(o,c);

// ⚠️⚠️⚠️ IMPORTANT IMPORTANT IMPORTANT⚠️⚠️⚠️
// most imp point remember 
// access/change/do whatever with array :- "USING ARR's INDEX number"
// do whatever with object :- "USING OBJECT's KEY NAME"
