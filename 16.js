let animal = {
  eats: true,
};
// 利用给定的原型来创建的对象
let rabbit = Object.create(animal, {
  jumps: {
    value: true,
  },
});
console.log(rabbit.eats); // true
// 判断对象的原型
console.log(Object.getPrototypeOf(rabbit) === animal); // true
// 改变对象的原型
// Object.setPrototypeOf(rabbit, {});
console.log(rabbit.eats);

//克隆
let dog = Object.create(
  Object.getPrototypeOf(rabbit),
  Object.getOwnPropertyDescriptors(rabbit)
);
console.log(dog.eats);
console.log(dog.jumps);
