// Task #99


class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();


// Task # 100


class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик");

console.log(rabbit.name);
console.log(rabbit.created);


// Task # 101


class ExtendedClock extends Clock {
  constructor(options) {
    super(options);

    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}


// Task # 102


class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log(rabbit.hasOwnProperty('name'));


// Task # 103


// Оператор instanceof проверяет не то, какой функцией был создан объект, а то, есть ли prototype этой функции в цепочке прототипов объекта. В нашем примере A.prototype и B.prototype ссылаются на один и тот же объект. Поэтому a.__proto__ совпадает с B.prototype, и проверка a instanceof B возвращает true.