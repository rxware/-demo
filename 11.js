/* let animal = {
  eat: 'food'
};
let rabbit = {
  run: true,
  __proto__: animal
};
console.log(rabbit.eat); */
// 保护原型中的值，当改变继承下的值，原型不会改变
let user = {
  name: 'Jhon',
  surname: 'Smith',
  get fullName() {
    return `${this.name}${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};
console.log(admin.fullName);
admin.fullName = 'Alice Cooper';
console.log(admin.name);
console.log(admin.surname);
console.log(user.fullName);
