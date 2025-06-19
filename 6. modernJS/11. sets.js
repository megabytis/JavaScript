'use strict';

/* Built-in SET methods :---
has(), clear(), add(), delete(), 
union(), intersection(), difference(), symmetricDifference(), 
isSubsetOf(), isSupersetOf(), isDisjointFrom(), 


*/

// Duplicates r not allowed
const subjects = new Set([
  'mathematics',
  'odia',
  'english',
  'biology',
  'geography',
  'odia',
]);
console.log(subjects);

// to get set length
console.log(subjects.size); // same like .length property in array :)

// to check wheather a property +nt ot not'
console.log(subjects.has('chemistry')); // same like .includes() :)
console.log(subjects.has('biology'));

// to add new elements to exisisting set
subjects.add('physics');
console.log(subjects);

//  to delete
subjects.delete('mathematics');
subjects.delete('astrophysics'); // this element isn't present in set, so nonthing will happen
console.log(subjects);

// to remove every element from the set
subjects.clear();
console.log(subjects);

const fruits = new Set([
  'apple',
  'grape',
  'orange',
  'watermelon',
  'banana',
  'jackfruit',
]);

// to ITERATE over the set
for (const x of fruits) console.log(x);

// converting an STRING to a SET
console.log(new Set('goosebumps'));

// converting ARRAY to SET
const sampleArray = ['music', 'game', 'study', 'workout'];
const sampleSet = new Set(sampleArray);
console.log(sampleSet);

//  converting SET to ARRAY
const sampleArray2 = [...sampleSet];
console.log(sampleArray2);

const ssvmBoys = new Set([
  'Rohan',
  'Aditya',
  'Srinivas',
  'Suman',
  'Hritik',
  'Shritam',
]);

const davBoys = new Set([
  'Ashutosh',
  'Prabhanjan',
  'Aditya',
  'Suman',
  'Debashish',
]);

// UNION
const allBoys = ssvmBoys.union(davBoys);
console.log(allBoys);

// INTERSECTION
const commonBoys = ssvmBoys.intersection(davBoys);
console.log(commonBoys);

// DIFFERENCE
const ssvmBoysDifferenceDavboys = ssvmBoys.difference(davBoys);
console.log(`ssvmBoys-davBoys: ${[...ssvmBoysDifferenceDavboys]}`);
// IMPORTANT
/*
is while logging any set giving result like this :- [object Set]
then just convert it to ARRAY & use ' ... ' spread operator 
e.g. [...setName]
*/

const davBoysDifferenceSsvmboys = davBoys.difference(ssvmBoys);
console.log(`davBoys-ssvmBoys: ${[...davBoysDifferenceSsvmboys]}`);
console.log(davBoysDifferenceSsvmboys);

// SYMMETRIC DIFFERENCE
const symDiffBothBoys = ssvmBoys.symmetricDifference(davBoys);
console.log(symDiffBothBoys);
/* 
--> It means it will print everything except common elements btn two sets
--> or u can say, it will give all elements of dav-ssvm & ssvm-dav
*/

// DISJOINT
console.log(ssvmBoys.isDisjointFrom(davBoys));
// 'isDisjointFrom' means both sets have no common elements, is yes then prints false

// SUBSET
console.log(ssvmBoys.isSubsetOf(davBoys));

// SUPERSET
console.log(ssvmBoys.isSupersetOf(davBoys));
