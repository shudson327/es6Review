// Explore Differences Between the var and let Keywords
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

console.log(quote);

// Compare Scopes of the var and let Keywords
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }

//   Declare a Read-Only Variable with the const Keyword
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
      console.log(SENTENCE);
    }
  }
  printManyTimes("freeCodeCamp");

//   Mutate an Array Declared with constPassed
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

// Prevent Object MutationPassed
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
      PI: 3.14
    };
  
    Object.freeze(MATH_CONSTANTS);
  
    try {
      MATH_CONSTANTS.PI = 99;
    } catch (ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  
  const PI = freezeObj();

//   Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => {
    "use strict";
    return new Date();
  };

//   Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };
  console.log(myConcat([1, 2], [3, 4, 5]));

//   Set Default Parameters for Your FunctionsPassed
const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); 
console.log(increment(5)); 

//  Use the Rest Parameter with Function ParametersPassed
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3)); 

//  Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 

arr2 = [...arr1]; 

console.log(arr2);

// Use Destructuring Assignment to Extract Values from ObjectsPassed
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const {today, tomorrow} = HIGH_TEMPERATURES;

//   Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
    
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
  
  console.log(highToday); 
  console.log(highTomorrow); 

//   Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
    
  const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
  
  console.log(lowToday);

//   Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
[a, b] = [b, a];

// Use Destructuring Assignment with the Rest Parameter to Reassign Array ElementsPassed
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  "use strict";

  const [a, b, ...arr] = list;
  
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source); 

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  const half = ({ max, min }) => (max + min) / 2.0;

//   Create Strings using Template Literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
  
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

//   Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
    "use strict";
  
    return {
      name,
      age,
      gender
    };
  };

//   Write Concise Declarative Functions with ES6
const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };
  
  bicycle.setGear(3);
  console.log(bicycle.gear);

//   Use class Syntax to Define a Constructor Function
class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); 

//   Use getters and setters to Control Access to an Object
class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }

//   Create a Module Script
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>

// Use export to Share a Code Block
export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  export const lowercaseString = (string) => {
    return string.toLowerCase()
  }

//   Reuse JavaScript Code Using import
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

// Use * to Import Everything from a FilePassed
import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// Create an Export Fallback with export default
"use strict";
export default function subtract(x, y) {
  return x - y;
}

// Import a Default Export
import subtract from "./math_functions.js";

subtract(7,4);

// Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {

});

// Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });

//   Handle a Fulfilled Promise with thenPassed
const makeServerRequest = new Promise((resolve, reject) => {
  
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });

//   Handle a Rejected Promise with catchPassed
const makeServerRequest = new Promise((resolve, reject) => {

    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  
  makeServerRequest.catch(error => {
    console.log(error);
  });