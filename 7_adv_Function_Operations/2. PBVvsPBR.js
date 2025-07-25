'use strict';

// ########################################################################
// ########## pass by VALUE (PBV) v/s pass by REFERENCE (PBR) #############
// ########################################################################

/* ⚠️ IMP ⚠️ ;
Remember 🤨 ?
-> (variables/Primitives) r PBV, directly stored in CALL STACK
-> but (objects & Arrys) r PBR, stored in HEAP & referenced in Call Stack
*/
const collegeName = 'Utkal University';
const student = {
  name: 'Madhusudan Bhukta',
  ID: 'PBR100',
};

function entryToCollege(collegeLocation, student, collegeName) {
  collegeLocation = 'Bhubaneswar';
  student.ID = 'PBR209U';
  collegeName = 'NIIS college of Institute';

  if (student.ID.includes('PBR') && student.ID.endsWith('U')) {
    console.log(
      `Mr. ${student.name} welcome to ${collegeName}, ${collegeLocation}`,
    );
  } else {
    console.log('Invalid ID');
  }
}

entryToCollege('BBSR', student, collegeName);
console.log(student.ID);
console.log(collegeName);
/* ⚠️⚠️ IMP ⚠️⚠️
See, here student ID is changed permanently, but collegeName not changed permanently, only changed inside function block
-> bcuz, student ID is stored inside 'student' OBJECT, which is PBR LoL😆, 
but collegeName is just a variable/Primitive, which is PBV, so 2 copies of it being created, one is outside & another is inside function block .
*/
