// // -------- let's start -----------
// let country = "India" ;
// let continent = "Asia" ;
// let population = '1.5 Billion'

// console.log(" The name of my country is",country,
//     ".\n It is in ", continent," continent ." ,
//     "\n Population of my country is",population
// )

// // changing the variable value
// population = "1.48B"

// console.log(" The name of my country is",country,
//     ".\n It is in ", continent," continent ." ,
//     "\n Population of my country is",population
// )

// // typeof operator usage
// let b = null ;
// let anyValue = 12.5 ;
// let weAreHumans = true ;
// console.log(typeof b , typeof anyValue) ;
// console.log(typeof(weAreHumans)) ;
// console.log(typeof 'Human',typeof "Human")

// //usage of let ,const, var
// let age = 20 ;
// console.log("age : ", age) ;
// age = 21 ;
// console.log("New age : ", age) ;

// const dateOfBirth = 472004 ;
// console.log("D.O.B. : ", dateOfBirth) ;
// // dateOfBirth = 482005 ;

// var Age = 30 ;
// console.log("Age : ",Age) ;
// Age = 32 ;
// console.log("New Age : ",Age) ;

// // ------------ Basic Operators ----------
// // +  -  *  **  /  %  =
// // +=  -=  /=  *=
// // ++  --
// let currentYear = 2025 ;
// const myCurrentAge = currentYear - 2004 ; // ' - ' used for mathematical substraction
// console.log(myCurrentAge) ;
// console.log(myCurrentAge * 5 , myCurrentAge / 10 , myCurrentAge ** 2) ; // " ** " used for power

// const firstName = 'Madhusudan' ;
// const lastName = 'Bhukta' ;
// console.log(firstName + ' ' + lastName) ; // here ' + ' used for concartenation of two strings , not for mathematical addition purpose

// currentYear += 5 ;
// console.log(currentYear) ;
// currentYear-- ;
// console.log(currentYear) ;

// // --------- comparision operator ----------
// //  >  <  <=  >=
// console.log(currentYear > myCurrentAge ) ;
// console.log(myCurrentAge >= 25 ) ;

// const isGreater = currentYear >= 2022 ;
// console.log(isGreater) ;
// console.log(2029 - currentYear < myCurrentAge - 5) ;

// // --------- Opeator Precedence -----------
// reference : MDN js opertor precedence website
// let a, b ;
// a = 10 ;
// b = 50 ;
// let avgWithoutBracket = a + b / 2 ;
// let avgWithBracket = (a + b) / 2 ;
// console.log(a, b , avgWithoutBracket, avgWithBracket) ;

// // ------- Strings and template literals --------
// const firstName = 'Madhusudan' ;
// const currentProfession = "Grduation student" ;
// const birthYear = 2004 ;
// const currentYear = 2025 ;

// this is very time consuming
// const miku = "i'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + currentProfession + ' !' ;
// console.log(miku)

// // But this is very easy to write using Backticks
// const mikuNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${currentProfession} !` ;
// console.log(mikuNew) ;

// console.log(`Wow man
// backtick is
// so awesome`) ;

// // --------- Decision Statements ------------
// const age = 15;
// const ageToTakeLicence = age >= 18;

// if (ageToTakeLicence) {
//   console.log(`Yes you can take 🚘 licence as you are ${age} `);
// } else {
//   const yearsLeftFor18 = 18 - age;
// }
//     console.log(`No you can not take 🛻 licence  toay but yeah after ${yearsLeftFor18} years later for sure . `) ;
// }

// const yearOfBirth = 2008  ;
// let gen;
// if(yearOfBirth >= 1997 && yearOfBirth <= 2012) {
//     gen = 'genZ' ;
// } else if(yearOfBirth > 2012) {
//     gen = 'genAlpha' ;
// }
// else {
//     gen = 'U r might from genY / genX / ....'
// }

// console.log(gen) ;

// // ------------ Type conversion(manually) -----------
// const age = '22' ;
// console.log(Number(age), age);
// console.log(age + 10) ;
// console.log(Number(age) + 10) ;

// console.log(Number('Miku'));
// console.log(typeof NaN ); // NaN means not a number i.e. an invalid number

// // --------- Type coercion(automatically) ------------
// console.log('23' + 23) ;
// console.log('23' + '23') ;
// console.log('23' - '23') ;
// console.log('23' - 23) ;
// console.log('bb' - '23')
// console.log('23' * '23') ;
// console.log('23' * 23) ;
// console.log('bb' * '23') ;
// // i.e. '+' ଚିହ୍ନ ଆଉ 'string' ଥିଲେ ହିଁ କେବଳ concartenation ହେବ, ତା ଛଡ଼ା ଅନ୍ୟ କିଛି operator ଥିଲେ , either mathematical operation perform ହେବ / NaN ଆସିବ |

// // ------------ Truthy & Falsy Values --------------
// // There r 5 falsy values in js : 0, false, ' ', undefined, null, NaN
// // i.e. o/p will come 'false' if we'll convert them to Boolean
// // Except these all are truthy values i.e. 'true' will come as o/p

// let salary ;
// if(salary) {
//     console.log("Invest first !") ;
// } else {
//     console.log("Go and get a job first !") ;
// }
// // here 0 is falsy value so it converted to 'false' , so else statement executed .

// // ---------- Equality operators:'==' vs '===' -------------
// const a = prompt("Type your favourite number : ") ;
// if(a >= 9) {
//     alert("Hurrah") ;
// } else {
//     alert("u r Gaandu") ;
// }
// if (a == '93') {
//     console.log('Cool dude 93 is one of the best position') ;
// }
// // i.e. 93 == '93' ✅ but 93 === '93' ❌
// // i.e. ' == ' can typeconvert automatically from string to Number but ' === ' can't
// // so keep in mind always use '===' & '!==', whenever u'll need any conversion stuff , just manually do it 😉

// if (Number(a) === 93) { //  here it means 93 === 93
//     console.log('Cool dude 93 is one of the best position') ;
// }

// // ------------ Logical Operators(AND,OR,NOT) ------------
// //symbols :- AND : && , OR : || , NOT : !
// const doKnowCoding = true;
// const doKnowProblemSolving = true;
// const doKnowDevelepoment = false;

// console.log(doKnowCoding && doKnowDevelepoment);
// console.log(doKnowCoding || doKnowProblemSolving);
// console.log(!doKnowProblemSolving);
// console.log((doKnowCoding && doKnowProblemSolving) || doKnowDevelepoment);

// if (doKnowCoding && !doKnowDevelepoment && doKnowProblemSolving) {
//   console.log("You are Hired !! 🎉");
// } else {
//   console.log("Try again Next time !! 👍");
// }

// // ----------- Switch-case-break statement -------------
// const dayName = 'sunday' ;

// switch(dayName) {
//     case 'sunday' :
//         console.log("It's sunday , go fo routings");
//         break ;
//     case 'monday' :
//         console.log("It's monday , sit back and do work") ;
//         break ;
//     case 'tuesday' :
//     case 'wednesday' :
//         console.log("Its wednesday and tuesday");
//         break ;
//     case 'thursday':
//         console.log("Wooowoo thursday :) ");
//         break ;
//     case 'friday' :
//         alert("It's friday man") ;
//         break ;
//     case 'saturday':
//         alert("week over") ;
//         break ;
//     default:
//         console.log("You have not entered a valid week day name .");
//         break ;
// }

// // ------------statements and expressions -----------
// // statement :- which have an ';' at the end of the line .
// // we can't put an statement ` ${--here--} `, we can put any expression here like ,  any variable or any mathematical operations etc...etc... but not a statement
// if(1 > 2) {
//     const stmnt = "1 is bigger than 2"
// }
// // here (1>2) is expression , but entire if() block would be an statement
// console.log(`I'm gonna say that 1 >2 true or not : ${1>2}`) // inside ${} we can't put that previous entire if block rather than the 1>2 expression

// // ----------- Conditional Ternry Operator -----------
// const age = 15 ;
// age >= 18 ? console.log("I can get 🚘 licence") : console.log("I'm under 18 man !!!") ;
// // Or it also can be written as ;
// const canDriveACar = age >= 18 ? "I can get 🚘 licence" : "I'm under 18 man !!!" ;
// console.log(canDriveACar) ;
// // Or it also can be written as ;
// console.log(`I${age >= 18 ? ' can get 🚘 licence' : "'m under 18 man !!!"}`)
