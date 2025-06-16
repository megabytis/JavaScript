// we can use ANY DATA-TYPE & it can return also ANY DATA-TYPE

// ⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️
/*
FALSY values in js :-  ' ' , " ", undefined, null, NaN, 0
*/

// ⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️
console.log("------------------OR----------------------");
// according to LOGICAL OR rule, if any one is TRUE, then log TRUE
// so, LOGICAL OR starts looking values from starting one by one,
// whenever  finds a TRUTHY value, it does short-circuit i.e. prints that TRUTHY value & never goes forward
// & if doesn't find any TRUTHY value, whenever at the end it stops on which value, also prints that 
console.log('miku' || 9);
console.log(null || undefined);
console.log('' || 'miku');
console.log(NaN || 0 || 9);
console.log('' || undefined ||'miku' || 78 || null);

// ⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️
console.log("-------------------AND-----------------------");
// according to LOGICAL AND rule, if any one is FALSE, then log FALSE
// so, LOGICAL AND starts looking values from starting one by one,
// whenever  finds a FALSY value, it does short-circuit i.e. prints that FALSY value & never goes forward
// & if doesn't find any FALSY value, whenever at the end it stops on which TRUTHY value, prints that 
console.log(90 && "miku" && 94);
console.log(3838 && null && 489 && undefined && "miku");
console.log(NaN && undefined && null && NaN);
console.log(90 && 0 && 89);

// ----------------------------------------------------------------------------
// PRACTICAL EXAMPLE :------------
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

    bookRoom: function(roomIndex,xTraIndex) {
        return (this.rooms[roomIndex],this.xTraFacility[xTraIndex]);
    }
};

console.log(hotel.stateName || 90); // here 'hotel.stateName' is FALSY value, cuz in hotel Object there is nothing like that :)\
hotel.stateName = 'odisha';
console.log(hotel.stateName ? hotel.stateName : null); //  but after assigning a value to hotel.stateName, it now became TRUTHY :)

// ⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️
console.log("------------------??----------------------");
// ?? :- NULLISH COALESCRING OPERATOR
// NULLISH values r :- null, undefined ✅ (but not ' ', 0, NaN ❌)
// whenever ?? will find NO-NULLISH value, it will stop & return that NO-NULLISH value .
console.log(null ?? undefined ?? '' ?? 9 ?? undefined);

const rCopulesAllowed = hotel.couplesAllowed ?? "NO";
console.log(rCopulesAllowed); // prints "NO", cuz :-
// ⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️ :--- hotel.couplesAllowed is not present actually inside 'hotel' Object, so it will be counted as a NULLISH VALUE
