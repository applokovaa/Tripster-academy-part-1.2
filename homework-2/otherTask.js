// Task #3:

let admin;
let name;

name = 'John';
admin = name;

console.log(admin);

// Task #4:

let planetName = 'Земля';
let userName = 'Иван';

// Task #5:

//const BIRTHDAY = '18.04.1982';
//const age = someCode(BIRTHDAY);

// Task #6:

// hello 1
// hello name
// hello Ilya

// Task #7:

let yourName = 'Анастасия';
console.log(yourName);

// Task #8:

/* 
a = 2
b = 2
c = 2
d = 1 
*/

// Task #9:

/*
a = 4
x = 5
*/

// Task #10:

/*
1. "10"
2. -1
3. 1
4. 2
5. 6
6. "9px"
7. "$45"
8. 2
9. NaN
10.  -9 5
11. -14
12. 1
13. NaN
14. -2
*/

// Task #11:

/*
let a = "1";
let b = "2";

console.log(+a + +b);
*/

// Task #12:

/*
1. true
2. false
3. true
4. true
5. false
6. false
7. false
*/

// Task #13

// Выведется

// Task #14

let offName = 'ECMAScript';

if (offName === 'ECMAScript') {
    console.log("Верно!");
} else {
    console.log('Не знаете? ECMAScript!');
}

// Task #15

let number = 10;

if (number > 0) {
    console.log(1);
} else if (number < 0) {
    console.log(-1);
} else {
    console.log(0);
}

// Task #16

let result = (a + b < 4) ? 'Мало' : 'Много';

// Task #17

let message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' :
'';

// Task #18

// 2

// Task #19

// 1, 2

// Task #20

// null

// Task #21

// 1, undefined

// Task #22

// 3

// Task #23

// 30

// Task #24

if (age >= 14 && age <= 90)

// Task #25

if (age >= 14 && age <= 90)
if (age < 14 || age > 90)

//Task #26

/*
1. Выполнится = - 1
2. Не выполнится = 0
3. Выполнится = 1
*/

// Task #27

let login = 'Админ';
let password = 'Я главный';

if (login === 'Админ') {
    if (password === 'Я главный') {
        console.log('Здравствуйте!');
    } else if (password === "" || password === null) {
        console.log('Отменено');
    } else {
        console.log('Неверный пароль');
    }
} else if (login === '' || login === null) {
    console.log('Отменено');
} else {
    console.log('Я вас не знаю');
}

// Task #28

// NaN

// Task #29

// Берлин

// Task #30

let num1 = 10,
    num2 = 20,
    result;

result ??= num1 ?? num2;

// Task #31

// 1 - при каждом выполнении, число уменьшается на единицу. Остановится на 1

// Task #32

/* 
1. 1, 2, 3, 4
2. 1, 2, 3, 4, 5
*/

// Task #33

/*
1. 0, 1, 2, 3, 4
2. 0, 1, 2, 3, 4
*/

// Task #34

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task #35

let i = 0;

while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

// Task #36

let numbers = [50, 80, 100, 150];

let i = 0;
let num;

do {
    num = numbers[i];
    console.log('Введено: ${num}');
    i++;
} while (num <= 100 && num);

console.log('Подходит: ${num}');

// Task #37

let n = 10;

for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}

// Task #38

if (browser === "Edge") {
    console.log("You've got the Edge!");
} else if (
    browser === "Chrome" ||
    browser === "Firefox" ||
    browser === "Safari" ||
    browser === "Opera"
) {
    console.log("Okay we support these browsers too");
} else {
    console.log("We hope that this page looks ok!");
}

// Task #39

const number = 2;

switch (number) {
    case 0:
        console.log('Вы ввели число 0');
        break;

    case 1:
        console.log('Вы ввели число 1');
        break;

    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
        break;
}

// Task #40

// Поведение не изменится.

// Task #41

/*
1.
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}
2.
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}
*/

// Task #42

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// Task #43

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result = result * x;
    }

    return result;
}

let x = 3;
let n = 3;

console.log(pow(x, n));

// Task #44

function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

ask(
    "Вы согласны?",
    () => console.log("Вы согласились."),
    () => console.log("Вы отменили выполнение.")
);

// Task #45

