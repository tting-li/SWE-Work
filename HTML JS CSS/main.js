//primative types
let name = "TT";

const lastName = "Li";

let address = "some place on Earth";

let age = 18;

let uniqueKey = Symbol("key");
let uniqueKey2 = Symbol("key");

let isCool = true;
let isVeryCool = false;

let dob = null;

let addy;

//immutable
let x = 5;
let y = x;
y = 10;

//array -- mutable, was able to change the first array by editing the second arr
let arr = [1, 2, 3];
let arr2 = arr;
arr2.push(4); //adds a 4 to the end of the array

console.log(address);
console.log(typeof age);
console.log(name);
console.log(lastName);
console.log(uniqueKey == uniqueKey2);
console.log(isCool);
console.log(isVeryCool);
console.log(dob);
console.log(addy);
console.log(x);
console.log(y);

console.log(arr2);

//strings
console.log(`My name is ${name}`); //interpretation
console.log(`My name is ` + name); //concat

let s = `My name is ${lastName}`;

// string properties
console.log(s.length);

// string methods
console.log(s.toLocaleUpperCase());

s = s.toLocaleUpperCase();

s.indexOf("Y", 2);

s.substring(0, 7);

s1 = s[0];

s2 = s[8];

console.log(s1, s2);

// will be false, because the primatives are different, there are unique identifiers even if the content is the same

/**
 * non primitive data types
 */

//Objects
const person = {
  firstName: "TT",
  lastName: "Li",
  //embeded object within object
  address: {
    street: "something",
    suburb: "yay",
    streetName: "5",
  },

  age: "18",
};

console.log(person);

//arrays
let arr1 = new Array(1, 2, 3, 4);
let arr3 = (1, 2, 3, 4, 5);

console.log(arr1);
console.log(arr2);

let fruits = ["apple", "orange", "mango", "pear"];
console.log(fruits);

console.log(fruits[2]);

fruits.push("watermelon");
const popped = fruits.pop();
fruits.shift("mango");

console.log(popped); //LIFO
console.log(fruits);
fruits.unshift("mango");
console.log(fruits);
console.log(fruits.length);

//loops
const arr4 = [1, 2, 3, 4];

//for loops
for (let i = 0; i < arr4.length; i++) {
  console.log(i);
}

let fruited = fruits[1];

//for each loop
console.log("each othen");

//high order arrays
//helps filter out the apple element in the array
const filterFunction = (fruit) => {
  return fruit !== "apple";
};
const filteredFruits = fruits.filter(filterFunction);
console.log("filteredFruits: ");
console.log(filteredFruits);

const todos = [
  {
    id: 1,
    title: "take out the trash",
    completed: true,
  },
  {
    id: 2,
    title: "feed the dogs",
    completed: false,
  },
  {
    id: 3,
    title: "go to the bank",
    completed: true,
  },
];

//loop similar to for each loop -- O(n^2)
const getCompletedTodos = (todos) => {
  return todos.filter((todo) => {
    return todo.completed == true;
  });
};
//one line no {}, more than one line {} needed
console.log(getCompletedTodos(todos));

const newTodos = todos.map((todo) => {
  return {
    id: todo,
    title: todo.title,
    compelted: todo.completed,
    priority: "Low",
  };
});

//modulos -- %, returns the remainder of the division

let remainder = 13 % 5;
console.log(remainder);

//conditionals

task = {
  id: 3,
  title: "sleep",
  completed: true,
};

if (task.completed == true) {
  console.log("Task Done");
} else {
  console.log("Task Not Done");
}

switch (task.compelted) {
  case true:
    console.log("Task is Done");
    break;
  case false:
    console.log("Not Done");
    break;
  case null:
    console.log("Not Started");
    break;
  default:
    console.log("Need Task");
    break;
}

console.log(task.completed === true ? "Task Done" : "Task not done");

//functions
let factor = 2;

//conventional func
function addFactor(val) {
  return val * factor;
}

//arrow function
const addFactorVar = (val) => {
  return val * factor;
};

console.log(addFactor(5));
console.log(addFactorVar(15));

//DOM
const onSubmit = (e) => {
  e.preventDefault();
  //the index value pulls out different inputs depending on the id placement, if there are two firstName ids, 0 will access the first one and 1 or access the following input
  //if there is only 1 input id, then the index is not needed -- not really...
  const firstName = document.getElementsByName("firstName")[0].value;
  const lastName = document.getElementsByName("lastName")[0].value;
  console.log("on submit"); //will print on submit when the button is pressed
  console.log(firstName); //will get the input
  console.log(lastName);
};

//Fibbonacci
function fibbonacci(count) {
  if (count === 1) {
    return [0];
  } else if (count === 2) {
    return [0, 1];
  } else {
    let seq = [0, 1];
    for (i = 1; i < count - 1; i++) {
      seq.push(seq[i] + seq[i - 1]);
    }
    return seq;
  }
}

console.log(fibbonacci(10));

function trianglePer(sides) {
  if (sides.length === 3) {
    let s = (sides[0] + sides[1] + sides[2]) / 2;
    return (s * (s - sides[0]) * (s - sides[1]) * (s - sides[2])) ** 0.5;
  } else {
    return null;
  }
}

let tSides = [3, 4, 5];

console.log(trianglePer(tSides));
