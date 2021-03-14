class User {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      console.log("name is to short");
    }
    this._name = value;
  }
  sayHi() {
    console.log(this.name);
  }
}
let user = new User("jhon");
console.log(user.name);
user.name = "";

// console.log(typeof User);
// console.log(User === User.prototype.constructor);
// console.log(User.prototype.sayHi);
// console.log(Object.getOwnPropertyNames(User.prototype));

// function User(name) {
//   this.name = name;
// }
// User.prototype.sayHi = function () {
//   console.log(this.name);
// };
//
// let user = new User("jhon");
// user.sayHi();

// let User = class myClass {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(myClass);
//   }
// };
// let user = new User("jhon");
// console.log(myClass); // 外部不可访问
// user.sayHi();
