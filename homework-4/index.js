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


