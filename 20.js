class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  run(speed) {
    this.speed = speed;
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name}stand still`);
  }
}
let animal = new Animal("My animal");

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
  hide() {
    console.log(`${this.name} hides`);
  }
  stop() {
    // 重写animal中的方法
    super.stop();
    this.hide();
  }
}
let rabbit = new Rabbit("white Rabbit");
rabbit.run(10);
console.log(rabbit.speed);
rabbit.stop();
rabbit.hide();
