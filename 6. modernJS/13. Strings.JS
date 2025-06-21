'use strict';

// PART: 1
// accessing letters of a string
const cuosine = 'italiano';
console.log(cuosine[2]);
console.log('filipino dishes'[9]);

// 'length' property
console.log(cuosine.length);
console.log('filipino dishes'.length);

// indexOf() method
console.log(cuosine.indexOf('a')); // returns index of 1st 'a'
console.log('i am a good bad boy'.indexOf('bad'));
console.log('i am a good bad boy'.indexOf('Bad')); //returns -1 i.e. 'Bad' is not found in string :)

// lastIndexOf() method
console.log('filipino dishes'.lastIndexOf('i')); // returns index of last 'i'

// STRING SLICING
// syntax : slice(startIndex,endIndex),
// but will print from startIndex to endIndex-1
console.log('i am a good bad boy'.slice(3, 8));
console.log(cuosine.slice(5));

const location = 'Chatabar Nayapalli Bhubaneswar';
console.log(location.slice(9, location.lastIndexOf(' ')));
console.log(location.slice(location.lastIndexOf(' ') + 1));

// NEGATIVE INDEXING
console.log(location.slice(-4));
console.log(cuosine.slice(0, -3));

// full Example :------
function checkIndianCurrency(price) {
  if (price.slice(-2) === 'rs')
    console.log(`Hurrahhh🥳, ${price} is indian currency`);
  else console.log(`sorry 😔, ${price} isn't indian currency`);
}
checkIndianCurrency('2bucks');
checkIndianCurrency('100rs');

console.log('------------------------------------------------------');
// WAY-2 to create string
const trainName = new String('Rajdhani Express');
console.log(typeof trainName); // 'trainName' is an Object, not an string
console.log(typeof trainName.slice(0)); // now it became an string

const airport = 'Biju Pattnaik International Airport';

// toLowerCase(), toUpperCase() method
console.log(airport.toLowerCase());
console.log('Bhubaneswar'.toUpperCase());

// Fixing captalization
const name = 'MadhUsuDan bHuktA';
const lowerCaseName = name.toLowerCase();
const fixName = lowerCaseName[0].toUpperCase() + lowerCaseName.slice(1);
console.log(fixName);

// Question
// convert this;
const eMaiL = ' abcIsInLowerCaSe@proton.me \t';
// to
const email = 'abcisinlowercase@proton.me';
// Answer :---
const lowerCasePlusTrimmedEmail = eMaiL.toLocaleLowerCase().trim();
console.log(lowerCasePlusTrimmedEmail);
console.log(email === lowerCasePlusTrimmedEmail);

// replace() method
const distance = '100km';
const distanceInMile = distance.replace('km', 'mile'); // OLD way👴
console.log(distanceInMile);

console.log(distance.replace(/100/g, '200')); // new way 🗽
/* Here i've written the string inside /<string>/, 2 front slaces
& 'g' means global
*/

// replaceAll() method
const sampleSentence =
  "i'm going to market, market is very crowded, so it will take a lot of time to purchase and come back from market.";
console.log(sampleSentence);

const replacedSentence = sampleSentence.replaceAll(/market/g, 'mall');
console.log(replacedSentence);

// include() method
console.log(sampleSentence.includes('purchase'));
console.log(replacedSentence.includes('market'));
console.log(replacedSentence.includes('ery cro'));

// startsWith(), endsWith() method
if (sampleSentence.startsWith("i'mm")) {
  console.log('Thick haiiiii');
} else if (replacedSentence.endsWith('ll.')) {
  console.log('mall');
} else {
  console.log('LoL😄');
}

// PRACTISE EXERCISE 🏗️
const badComments = ['mf', 'bi*ch', 'f*ck', 'fool', 'p*rn', 's*x'];
const checkingYtSpamComments = (comments) => {
  let blockedOrNot = false;
  for (const words of badComments) {
    if (comments.includes(words)) {
      console.log('U r blocked ! 🛑');
      blockedOrNot = true;
      break;
    }
  }
  blockedOrNot === false
    ? console.log(comments)
    : console.log("plz don't write bad words");
};

checkingYtSpamComments('Hey bi*ch, f*ck you');
checkingYtSpamComments('Wow such a nice video, thanks 4 sharing');

// STRING SPLITTING
// syntax: split(splitEl)
// whatever split element u'll choose, by leaving this it will break the entire string into string-parts
const string1 = 'JS is Awesome';
console.log(string1.split('s'));

const splittedString = string1.split(' ');
console.log(splittedString);

// STRING JOINNING
// syntax: join(splitEl)
// it'll join do reverse process of spli() method .
const joinedString = splittedString.join(' ');
console.log(joinedString);

/* A Cool Example 😎 ------:-----*/
const mrPerfectName = function (name) {
  const splittedName = name.split(' ');
  const capitalledName = [];

  for (const n of splittedName) {
    capitalledName.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(capitalledName.join(' '));
};
mrPerfectName('raghu veer suryavanshi');

// PADDING STRING
// syntax : padStart(num,sym), padEnd(num,sym)
const city = 'BBSR';
console.log(city.padStart(6, '+').padEnd(7, '+'));
/*
here padStart(6, '+') means, it will first try to make 'city's length 6,
'BBSR's length is 4, so (6-4=) 2 '+' symbols will be added before BBSR,
then padEnd(7, '+') will try to make it's length 7, i.e. 1 more '+' symbol will be added post BBSR,

⚠️⚠️⚠️IMPORTANT⚠️⚠️⚠️
padStart/padEnd's number should be greater than entire string's length
*/

// repeat() method
const string2 = 'Bellachao a marvellous song....';
console.log(string2.repeat(5));
