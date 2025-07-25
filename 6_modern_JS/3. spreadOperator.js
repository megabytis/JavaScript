const arr = [2,11,89,20];

const badArr = [5,19,arr[2],arr[0]];
console.log(badArr);

const badArr2 = [23,10,arr];
console.log(badArr2);

// NEW WAY (...spread) :)
const newArr = [29,71,...arr];
console.log(newArr);

/* ⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️
what happen's here, spread oprtr '...' just ""PULLS ELEMENTS"" from 'arr' &
places one by one in 'newArr' .
like we used to pull each elements by 'Traversing/iterating an array through for loop' :)
*/
// See:--
console.log(...badArr);

// an OBJECT 
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


//--------------------------------------------------------------------------------------
// increase xTraFacility :)
const moreXtraFacility = [...hotel.xTraFacility,"with prayer room"];
console.log(moreXtraFacility);

//--------------------------------------------------------------------------------
// copy array
const roomsCopy = [...hotel.rooms];
console.log(roomsCopy);

// ----------------------------------------------------------------------------------
// merge 2 arrays
const roomsWithXtraFacility = [...hotel.rooms,...hotel.xTraFacility];
console.log(roomsWithXtraFacility);

// ----------------------------------------------------------------------------------
// '...' is useful for ITERABLES ✅ like, STRINGS,ARRAYS,SET,MAP. not ❌ for OBJECTS
// example :-
const sampleString = "goosebumps";
const stringLetters = [...sampleString];
console.log(stringLetters);
// --------or-------
console.log(...sampleString);

//-----------------------------------------------------------------------------------
// playing with Functions :)
const requireList = [
    // prompt("Enter Hotel Name : "),
    // prompt("Hotel location : "),
    // prompt("type of Room's index : "),
    // prompt("extra facility's index : ")
];
hotel.bookRoom(...requireList);

// OBJECTS
const newHotel = {"Owner name":"Riteh Agarwal",...hotel,"couples allowd":false};
console.log(newHotel);

const copyHotel = {...hotel};
copyHotel.xTraFacility = ["living room","garage"];

console.log('hotel:',hotel.xTraFacility);
console.log('copyHotel:',copyHotel.xTraFacility);
