class Car {
  constructor({
    maxSpeed = 0, speed = 0, running, distance = 0,
  }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.running = running;
    this.distance = distance;
    /*
      Добавь свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        - maxSpeed - для хранения максимальной скорости
        - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
        - distance - содержит общий киллометраж, изначально с 0
    */
  }

  turnOn() {
    this.running = true;
    // Добавь код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
  }

  turnOff() {
    this.running = false;
    // Добавь код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
  }

  accelerate(spd) {
    if (spd < this.maxSpeed) {
      return this.speed = spd;
    }
    return this.speed = null;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
  }

  decelerate(spd) {
    if (spd < this.maxSpeed && spd > 0) {
      return this.speed = spd;
    }
    return this.speed = null;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
  }

  drive(hours) {
    if (this.running === true) {
      this.distance = hours * this.speed;
    }
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
  }
}

const car = new Car({ maxSpeed: 100 });

car.turnOn();
console.log(car.running); // true
car.turnOff();
console.log(car.running); // false
car.turnOn();
console.log(car.running); // true
car.accelerate(25);
console.log(car.speed); // 0
car.accelerate(20);
console.log(car.speed); // 80
car.decelerate(-90);
console.log(car.speed); // null
car.decelerate(50);
console.log(car.speed); // 50
car.drive(10);
console.log(car.distance); // 500
