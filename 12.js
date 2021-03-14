let animal = {
  walk() {
    if (!this.isSleeping) {
      console.log('i walk');
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: 'white Rabbit',
  __proto__: animal
};
rabbit.sleep();
console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined

for (const key in rabbit) {
  //判断属性是否是对象中的属性  是的话输出，反之
  if (Object.hasOwnProperty(key)) {
    console.log(key);
  }
}
