//⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️
// Big difference btn Spread Operator & Rest pattern is :-

/* SPREAD :-------------
'...', assignment operator ପରେ ଲାଗିଲେ array କୁ ଭାଙ୍ଗିକି elements କୁ ଗୋଟି ଗୋଟି କରିଦିଏ  |
const arr = [1,2,...[3,4,5]];
*/

/* REST :----------------
'...', assignment operator ପୂର୍ବରୁ ଲାଗିଲେ elements କୁ ଯୋଡିକରି ଗୋଟେ array ଭିତରେ ରଖିଦିଏ |  
const [a,b,...others] = [1,2,3,4,5];
*/

// e.g.:-
const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others);

// ---------------------------------------------------------------
// REST with Arrays
const college = {
    location : "saradaVihar-Madanpur-Bhubaneswar-Khordha",
    games : ['volleyball','football','cricket'],
    courses : ['BCA','BBA','BSC','MBA','MCA'],

    playGames : function(game1, game2) {
        return [this.games[game1], this.games[game2]];
    }
};

const [whereIscollege,collegeGames,...otherStuffs] = [college.location,...college.games,...college.courses];
console.log(whereIscollege,collegeGames,otherStuffs);
/*
SEE THE BEAUTY OF JAVASCRIPT 😍
-> here  ..college.games & ...college.courses broke nd pull each single elements from 'games' & 'courses' array i.e. SPREAD
-> on the other side, ...otherStuffs hold/attached everything in one array i.e. REST
*/

// -----------------------------------------------------------------
// REST with Objects
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

const {saturday,...otherDays} = hotel.openingHours;
console.log(saturday,otherDays);

// -----------------------------------------------------------------
// REST with functions
function sum(...numbers) {
    let sum = 0;
    for(i=0; i<numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

const mul = function(...numbers) {
    let multiply = 1;
    for(i=0; i<numbers.length; i++) multiply *= numbers[i];
    console.log(multiply);
}

sum(1,2,3,4);
mul(1,2,3,4);

const number = [89,32,45,111];
sum(...number);

const iWannabook = [0,1];
console.log(`i wanna book ${hotel.bookRoom(...iWannabook)}`);  