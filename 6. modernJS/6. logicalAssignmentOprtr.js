const hotel1 = {
    name: "OYO",
    numOfRooms: 20,
    ownerName: "Ritesh_Agarwal"
};

const hotel2 = {
    name: "Hotel_Shanti",
    location: "BBSR",
    roomNum: 43
};

console.log("_____________________||=______________________");
// MANUAL METHOD of assigning 
hotel1.numOfRooms = hotel1.numOfRooms || 30;
hotel2.numOfRooms = hotel2.numOfRooms || 30;

console.log(hotel1,hotel2);

// LOGICAL OR ASSIGNMENT OPERATOR 
hotel1.ownerName ||= "Ritesh_Agarwal";
hotel2.ownerName ||= "Shyam_Lenka";

console.log(hotel1,hotel2);

console.log("_____________________??=__________________________");
// NULLISH ASSIGNMENT OPERATOR
hotel1.location ??= "Sambalpur";
hotel2.location ??= "Bargardh";
console.log(hotel1,hotel2);
/*
here hotel1 didn't have location i.e. NULLISH, so it assigned NO-NULLISH value 'Sambalpur' to it .
but hotel2 already have an NO-NULLISH value of location i.e. "BBSR", so didn't assign "Bargardh" to it :)
*/

console.log("_________________________&&=___________________________");
// LOGICAL AND ASSIGNMENT OPERATOR
hotel1.roomNum &&= 34;
hotel2.roomNum &&= 90;
console.log(hotel1.roomNum,hotel2.roomNum);
/*
here hotel1 didn't have roomNum, so assigned 'undefined' to it 
but hotel2 has already roomNum 43, i.e. true . 
so, true && true = last true number i.e. 90 assigned to hotel2 :)
*/