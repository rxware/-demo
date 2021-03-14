// 获取对象标志
let user = {
  name: 'Jhon'
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));

// 修改标志
Object.defineProperty(user, 'name', {
  value: 'Jhon',
  enumerable: true, // 可遍历
  writable: false, // 可修改
  configurable: true // 可删除
});
for (const key in user) {
  console.log(key);
}

let de = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(de);
