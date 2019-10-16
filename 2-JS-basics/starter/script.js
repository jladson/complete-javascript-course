/*
Variables and data types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);
//console.log(lastName);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// variables naming rules
var _3years = 3;
var johnmark = 'john and mark';
var if = 23;
*/


/*
Variables and mutations and type coertion 
*/

/*
var firstName = 'John';
var age = 28;

// Type Coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' +  age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' +  age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/


/****************************
 *  Basic Operators
 */

/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math Operators
var yearJohn = now - ageJohn;
var yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);


// typeof operators
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/***************************
 *  Operators precedence 
 */


/*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 // Multiple Operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
// = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);

x = x + 1;
x += 1;
x++;
*/



/***************************
 *  Coding Challenge 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMI's
3. Create a boolean variable containing information about whether Mark has a higher BMI thay John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher then John's? true").

Good Luck
*/

var distance = 1;
var massMark = 78; // kg
var heightMark =  1.69; // meters

var massJohn = 92;
var heightJohn = 1.95

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);


/*************************
 * If / else statements
 */


/*
 var firstName = 'John';
 var civilStatus = 'single';

 if(civilStatus === 'married'){
     console.log(firstName + ' is married!');
 } else {
     console.log(firstName + ' will hopefully marry soon :)');
 }


 var isMarried = true;
 if(isMarried){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
 

var massMark = 78; // kg
var heightMark =  1.69; // meters

var massJohn = 92;
var heightJohn = 1.95

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn){
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\' BMI is higher than Mark\s');

}
*/


//console.log(BMIMark, BMIJohn);

//var markHigherBMI = BMIMark > BMIJohn;
//console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);


/*******************************
 * Boolean logic
 */


/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // between 13 and 20 = age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
}  else {   
    console.log(firstName + ' is a man.');
}
*/


/*********************************
 * The Ternary Operator and Switch Statements
 */

var firstName = 'John';
var age = 22;


// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') :
    console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/


// Switch statements
var job = 'cop';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teach kids how to code.');
        break
    case 'driver':
        console.log(firstName + ' drives an unber in Lisbon.');
        break
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break
    default:
        console.log(firstName + ' does something else.')
}

age = 17;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.')
}


/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // between 13 and 20 = age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
}  else {   
    console.log(firstName + ' is a man.');
}
*/


/***********************
 * Truthy and falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', 
// truthy values: Not falsy values

var height; 
height = 0;

if (height) {
    console.log('Variable is defined');
} else {
    console.log('Variables has NOT been defined');
}

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/


/******************************
 * Functions
 */

 /*
 function calculateAge(birthYear) {
     return 2018 - birthYear
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJohn, ageMike, ageJane);

 function yearsUntilRetirement(year, firstName)
 {
     var age = calculateAge(year);
     var retirement = 65 - age;

     if (retirement > 0 ) {
     console.log(firstName + ' retires in ' + retirement + ' years.');
      } else {
          console.log(firstName + ' is already retired.')
      } 
     
 }

 yearsUntilRetirement(1990, 'John');
 yearsUntilRetirement(1948, 'Mike');
 yearsUntilRetirement(1969, 'Jane');
/*

 /*********************
  * Function Statement and Expressions 
  */

  /*
  // Function declaration
  var whatDoYouDo = function(job, firstName){}

  // Function expression
  var whatDoYouDo = function(job, firstName){
      switch(job) {
          case 'teacher':
              return firstName + ' teaches kids how to code';

          case "driver":
              return firstName + ' drives a cab in lisbon';

          case "designer":
              return firstName + ' designs beautiful websites';
          default:
              return firstName + ' does something else';
      }
  }

  console.log(whatDoYouDo('teacher', 'John'));
  console.log(whatDoYouDo('designer', 'Jane'));
  console.log(whatDoYouDo('retired', 'Mark'));
  console.log(whatDoYouDo('driver', 'Bob'));
  */


  /********************
   *  Arrays
   */

   var names = ['John', 'Jane', 'Mark'];
   var years = new Array(1990, 1969, 1948);

   console.log(names[0]);
   console.log(names);








































