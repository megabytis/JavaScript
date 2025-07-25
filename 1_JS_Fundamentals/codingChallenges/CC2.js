/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
§ Data 1: Mark weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
§ Data 2: Mark weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall. */

// BMI CALCULATOR using Decission statement

const weightOfMark = 95 ;
const heightOfMark = 1.88 ;
const weightOfJohn = 85 ;
const heightOfJohn = 1.76 ;

// const weightOfMark = 78 ;
// const heightOfMark = 1.69 ;
// const weightOfJohn = 92 ;
// const heightOfJohn = 1.95 ;

const markBMI = weightOfMark / (heightOfMark ** 2) ;
const johnBMI = weightOfJohn / (heightOfJohn ** 2) ;

console.log(`Mark's BMI: ${markBMI}, John's BMI: ${johnBMI}`) ;

if(markBMI > johnBMI) {
    console.log(`Yes Mark's BMI(${markBMI}) is greater than John's BMI(${johnBMI}) .`) ;
} else if(markBMI < johnBMI) {
    console.log(`No Mark's BMI(${markBMI}) is lesser than John's BMI(${johnBMI}) .`) ;
} else {
    console.log(`Mark's BMI is same as compared to  John's BMI .`) ;
}