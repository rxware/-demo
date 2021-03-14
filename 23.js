class CoffeeMachine {
  _waterAmount = 0;
  constructor(power) {
    this._power = power;
    console.log(`created a coffee-machine,power:${power}`);
  }
  set waterAmount(value) {
    if (value < 0) throw new Error("negative water");
    this._waterAmount = value;
  }
  get waterAmount() {
    return this._waterAmount;
  }
  get power() {
    return this._power;
  }
}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.power = 10;
coffeeMachine.waterAmount = 10;
