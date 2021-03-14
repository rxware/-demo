class Animal {
  static planet = "earth";
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
  }
  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides`);
  }
}

let rabbit = [new Rabbit("White Rabbit", 10), new Rabbit("black Rabbit", 5)];
rabbit.sort(Rabbit.compare);
rabbit[0].run();
console.log(Rabbit.planet); // earth
