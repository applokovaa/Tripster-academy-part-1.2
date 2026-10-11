// Task #85


// Цикл:

function sumTo(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumTo(100));

// Рекурсия:

function sumTo(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumTo(n - 1);
}

console.log(sumTo(100));

// Формула:

function sumTo(n) {
  return n * (n + 1) / 2;
}

console.log(sumTo(100));


// Task #86


function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(1));


// Task #87


function fib(n) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(77));


// Task #88

// Цикл:
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

printList(list);

// Рекурсия:

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
}

printList(list);


// Task #89


// Цикл:

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverseList(list);

// Рекурсия:

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

printReverseList(list);


// Task #90


// Ответ - Pete, так как Функция обращается к текущему значению внешней переменной name. Она не запоминает значение "John" на момент своего создания.


// Task #91


// Ответ - Pete, так как Функция work создана внутри makeWorker, поэтому она имеет доступ к переменным из этой функции. Она найдёт локальную переменную name со значением "Pete", а не глобальную "John".


// Task #92


// Ответ - 0, 1 так как каждый вызов makeCounter() создаёт собственную переменную count. Поэтому счётчики работают независимо друг от друга.


// Task #93


// Ответ - 1, 2, 1 так как оба метода имеют доступ к одной и той же переменной count. Она не является свойством объекта counter, но доступна вложенным функциям через замыкание.


// Task #94


// Ответ - ошибка, так как в строгом режиме функция sayHi, объявленная внутри блока if, доступна только внутри этого блока. Снаружи она недоступна, поэтому возникает ошибка.


// Task #95


function sum(a) {
  return function(b) {
    return a + b;
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));


// Task #96


// Ответ - ошибка, так как внутри func объявлена своя переменная x. Она существует с начала выполнения функции, но до строки let x = 2 ещё не инициализирована. Попытка прочитать её раньше приводит к ошибке.


// Task #96


function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));

console.log(arr.filter(inArray([1, 2, 10])));


// Task #97


function byField(fieldName) {
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];

users.sort(byField("name"));
console.log(users);

users.sort(byField("age"));
console.log(users);


// Task #98


function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;

    let shooter = function() {
      console.log(j);
    };

    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[1]();
army[2]();
army[5]();
army[9]();




