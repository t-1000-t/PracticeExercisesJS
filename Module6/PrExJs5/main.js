class Car {
  constructor({
    maxSpeed = 0, price = 0,
  }) {
    this.maxSpeed = maxSpeed;
    this.price = price;
  }

  get value() {
    return this.price;
  }

  set value(newPrice) {
    this.price = newPrice;
  }
}

const car = new Car({ maxSpeed: 50, price: 2000 });
console.log(car.value); // 2000

car.value = 4000;
console.log(car.value); // 4000
