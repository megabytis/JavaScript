"use stric";

/*
It is just more enhanced New way of declaring literals/instances inside an object.
*/

const weekDays = ['monday','tuesday','friday','saturday'];

const  openingHours = {
    [weekDays[0]] : {
        open : '11AM',
        close : '9PM'
    },
    [weekDays[1]] : {
        open : '9AM',
        close : '6PM'
    },
    [`Pre-${weekDays[3]}`] : {
        open : '10AM',
        close : '7PM'
    },
    [`it's ${weekDays[weekDays.length-1]}`] : {
        open : '1PM',
        close : '9PM'
    }
};
/*
1st of all i removed this from main 'hotel' object & created outside of it 
2ndly i pulled it's keys name through also an external 'weekDays' array
*/

console.log(openingHours);


const hotel = {
    name : "OYO",
    location : "Gohiria sqaure, khurdha-road, BBSR",
    rooms : ['1BHK','2BHK','3BHK'],
    xTraFacility : ['with balcony','with garage','with studyRoom'],

    openingHours,
    /*
    here i made openingHours as an object outside this main object
    & then just called it here ...
    */
    
    // OLD WAY of declaring function literal inside Object
    bookRoom: function(roomIndex,xTraIndex) {
        return (this.rooms[roomIndex],this.xTraFacility[xTraIndex]);
    },

    // NEW WAY of declaring function literal inside Object
    bookRoom2(roomIndex,xTraIndex) {
        return (this.rooms[roomIndex],this.xTraFacility[xTraIndex]);
    }


};

console.log(hotel);