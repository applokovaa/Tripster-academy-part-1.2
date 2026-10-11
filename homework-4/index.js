// Task #50

// undefined - потому что str — это примитив типа string, и свойство test не сохраняется

// Task #51

let a = "1";
let b = "2";

console.log(+a + +b);

// Task #52

/* Проблема в особенностях хранения дробных чисел в JavaScript: 6.35 может храниться чуть меньше, чем 6.35, поэтому toFixed(1) даёт 6.3.
console.log((6.35 * 10).toFixed(20));
*/

// Task #53

function readNumber() {
    let value = "25";

    if (value === "" || value === null) {
        return null;
    }

    return +value;
}

console.log(readNumber()); 

// Task #54

// Потому что 0.2 нельзя точно представить в двоичной системе. Из-за погрешности i никогда не станет ровно 10.

// Task #55

function random(min, max) {
  return min + Math.random() * (max - min);
}

console.log(random(1, 5));

// Task #56

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInteger(1, 5));

// Task #57

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася"));

// Task #58

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

// Task #59

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  }

  return str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

// Task #60

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue("$120")); 

// Task #61

// 4

// Task #62

let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles[Math.floor((styles.length - 1) / 2)] = "Классика";

console.log(styles.shift());

styles.unshift("Рэп", "Регги");

console.log(styles);

// Task #63

// ["a", "b", function]

// Task #64

function sumInput(values) {
  let numbers = [];

  for (let value of values) {
    if (value === "" || value === null || !isFinite(value)) {
      break;
    }

    numbers.push(+value);
  }

  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(sumInput(["1", "2", "3", "4"]));

// Task #65

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;

    maxSum = Math.max(maxSum, partialSum);

    if (partialSum < 0) {
      partialSum = 0;
    }
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));

// Task #66

function camelize(str) {
  return str
    .split("-")
    .map((word, index) => {
      if (index === 0) {
        return word;
      }

      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// task #67

function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);

// Task #68

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr);


// Task #69


let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr);


// Task #70


function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);


// Task #71


function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {
    let parts = str.split(" ");

    let a = +parts[0];
    let operator = parts[1];
    let b = +parts[2];

    if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[operator](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();

console.log(calc.calculate("3 + 7"));
console.log(calc.calculate("10 - 4"));

calc.addMethod("*", (a, b) => a * b);

console.log(calc.calculate("3 * 4"));


// Task #72


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(user => user.name);

console.log(names);


// Task #73


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log(usersMapped);


// Task #74


function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

console.log(arr);


// Task #75


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
}

let arr = [1, 2, 3, 4, 5];

shuffle(arr);

console.log(arr);


// Task #76


function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr));


// Task #77


function unique(arr) {
  let result = [];

  for (let value of arr) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }

  return result;
}

let strings = [
  "кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));

// Task #78


function groupById(array) {
  return array.reduce((result, item) => {
    result[item.id] = item;
    return result;
  }, {});
}

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 }
];

let usersById = groupById(users);

console.log(usersById);


// Task #79


function sumSalaries(salaries) {
  let sum = 0;

  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(sumSalaries(salaries));


// Task #80


function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: "John",
  age: 30
};

console.log(count(user));


// Task #81


let user = {
  name: "John",
  years: 30
};

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);


// Task #82



function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > max) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries));
console.log(topSalary({}));


// Task #83


let user = {
  name: "Василий Иванович",
  age: 35
};

let json = JSON.stringify(user);
let user2 = JSON.parse(json);

console.log(json);
console.log(user2);


// Task #84


let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

let json = JSON.stringify(meetup, function replacer(key, value) {
  if (key !== "" && value === meetup) {
    return undefined;
  }

  return value;
}, 2);

console.log(json);