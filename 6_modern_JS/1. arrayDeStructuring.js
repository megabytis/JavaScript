"use strict";

// array deStructuring means unpacking of array

// METHOD : 1
const arr = [10,20,30];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a,b,c);

// METHOD : 2
const [x,y,z] = arr;
console.log(x,y,z);

// ---------------------------------------------------------
const college = {
    location : "sarada vihar, Madanpur, Bhubaneswar, Khordha",
    games : ['volleyball','football','cricket'],
    courses : ['BCA','BBA','BSC','MBA','MCA'],

    playGames : function(game1, game2) {
        return [this.games[game1], this.games[game2]];
    }
};

let [americanGame,globalGame,britishGame] = college.games;

console.log(`
americanGame:${americanGame}
globalGame:${globalGame}
britishGame:${britishGame}
`);
//here each element of 'college.games' goes one by one to americanGame, globalGame & britishGame
// but what if i don't want to pull consecutive elements from college

let [myCourse,,,,myGfCourse] = college.courses;
console.log(`
myCourse:${myCourse}
myGfCourse:${myGfCourse}
`);
/*
here 'BCA' went to myCourse, but there is no variable to hold 'BBA', to it got skipped :)
also no variable created to hold 'BSC', so got skipped,
then to hold 'MCA', there was 'myGfCourse' :)
like this how it works 
*/
//----------------------------------------------------
// Now SWITCHING VARIABLES
// METHOD : 1
console.log(`before switching :-
globalGame:${globalGame}
britishGame:${britishGame}
`);

const temp = globalGame;
globalGame = britishGame;
britishGame = temp; // worst lengthy method :(

console.log(`after switching :-
globalGame:${globalGame}
britishGame:${britishGame}
`);

// METHOD : 2
console.log(`brfore switching :--
myCourse:${myCourse}
myGfCourse:${myGfCourse}
`);

[myCourse,myGfCourse] = [myGfCourse,myCourse]; // Best method :)

console.log(`after switching :--
myCourse:${myCourse}
myGfCourse:${myGfCourse}
`);

// -----------------------------------------------------------------
// receiving more than one values from an array through function calling :----

// directly printing that array
console.log(college.playGames(1,2));
// ----or-----
// storing & printing those variables
const [khela1,khela2] = college.playGames(2,0);
console.log(khela1,khela2);

//------------------------------------------------------------------
// NESTED deStructuring :---
const nestedArr = [10,20,[30,40],50];
const [n1,,n2] = nestedArr;
console.log(n1,n2);
// here in n2 entire [30,40] will be stored, so to store 30,40 in separate variables;
const [n3,,[n4,n5]] = nestedArr;
console.log(n3,n4,n5);// receiving an array after calling a function

//-----------------------------------------------------------------------------------
// DEFAULT VALUE 
const [aa=11,bb,cc=22] = [33,99];
console.log(aa,bb,cc); // o/p :- 33 99 22
// i.e. if we won't give any values later to consts, it will log the default assigned value.
const [aaa=111,bbb=9090,ccc] = [33,,78];
console.log(aaa,bbb,ccc); // o/p :- 33 9090 78