/* let user = {
  name: 'Jhon',
  surname: 'Smith',
  get fullName() {
    return `${this.name}${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  }
};
user.fullName = 'Bob Si';
console.log(user.fullName);
console.log(user.name);
console.log(user.surname); */

let user = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length > 4) {
      console.log('Name is too short');
      return;
    }
    this._name = value;
  }
};
// 当get的值被修改时会走set函数并且判断赋值的长度如果符合要求设置name的值反之
user.name = 'peteyyyy';
console.log(user.name);

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
  Object.defineProperty(this, 'age', {
    get() {
      let todyYear = new Date().getFullYear();
      return todyYear - this.birthday.getFullYear();
    }
  });
}

let jhon = new User('Jhon', new Date(1992, 6, 1));
console.log(jhon.birthday);
// 修改不了值必须要有set
console.log(jhon.age);
