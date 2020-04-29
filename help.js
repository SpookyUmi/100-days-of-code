/* eslint-disable*/

//* Function

/* function doctorize(firstName) {
  return `Dr. ${firstName}`;
} */

//* Anon Function

/* function (firstName) {
  return `Dr. ${firstName}`;
} */

//* Function Expression

/* const doctorize = function(firstName) {
  return `Dr. ${firstName}`;
}; */

//* Function

/* function inchToCM(inches) {
  return inches * 2.54;
} */

//* Function in a variable

/* const inchToCM = function(inches) {
  return inches * 2.54;
}; */

//* 'Function' = '=>'

/* const inchToCM = (inches) => {
  return inches * 2.54;
}; */

//* Without 'return', function body and parenthesis

/* const inchToCM = inches => inches * 2.54; */

/* function add(a, b = 3) {
  const total = a + b;
  return total;
} */

/* const add = (a, b = 3) => a + b; */

//* Returning a function with an object inside

/* function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0
  }
  console.log(typeof baby);
  return baby;
} */

/* const makeABaby = (first, last) => ({name: `${first} ${last}`, age: 0});*/

//* IIFE
//* Immediately Invoked Function Expression

/* (function(age) {
  console.log('Running the Yolo function', `and you are ${age}`);
  return 'You are cool and ${age}';
})(10);
 */

//* Methods

const umi = {
  name: 'umi dnv',
  //! Method
  sayHi: function () {
    console.log('Hey Umi');
    return 'Hey Umi';
  },
  //! Short hand Method
  yellHi() {
    console.log('HEY UMI')
  },
  //! Arrow function
  whisperHi: () => {
    console.log('hi umiiiiiiiiiiii')
  }
}

//* Callback Functions
//? Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('YOOOOLOOOOO!!');
}

button.addEventListener('mouseover', function () {
  console.log('Nice job!!');
});

//? Timer Callback
setTimeout(function () {
  console.log('Done! Time to eat!');
}, 1000);

// Closure : a function in a function, with private variables

// Callback function : A JavaScript Callback Function is a function that is passed as a parameter to another JavaScript function, and the callback function is run inside of the function it was passed into. Synchronously or asynchronously.
// For example :
const hooray = () => console.log('HOORAY !');
button.addEventListener('click', hooray);
