/*
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/

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

  static getSpecs(car) {
    console.log('maxSpeed: ', car.maxSpeed = 100),
    console.log('speed: ', car.speed = 50),
    console.log('running: ', car.running = true),
    console.log('distance: ', car.distance = 100);
  }

  turnOn() {
    this.running = true;
    // Добавь код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
  }

  accelerate(spd) {
    if (spd < this.maxSpeed) {
      return this.speed = spd;
    }
    return this.speed = null;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
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
car.accelerate(50);
car.drive(2);

Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
