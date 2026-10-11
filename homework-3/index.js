// Task #45

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task #46

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }

    return true;

// Task #47

// Заменить можно, const запрещает изменять саму переменную, но не запрещает изменять содержимое объекта

// Task #48

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);

// Task #49

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}