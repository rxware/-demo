// mixin
let sayHIMixin = {
  sayHi() {
    console.log(`hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(User.prototype, sayHIMixin);
new User("Jhon").sayHi();
