let user = {
  name: "jhon",
  age: 30,
  _password: "***",
};

user = new Proxy(user, {
  // 拦截获取对象的键
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
  // 拦截获取对象属性描述
  getOwnPropertyDescriptor(target, p) {
    return {
      value: "jhon",
      enumerable: true,
      configurable: true,
    };
  },
  // 拦截删除属性
  deleteProperty(target, p) {
    if (p === "_password") {
      throw "不能删除";
    } else {
      delete target[p];
      return true;
    }
  },
});

for (const userKey in user) {
  console.log(userKey);
}
console.log(Object.getOwnPropertyDescriptor(user, "name"));
console.log(delete user.name);
console.log(user.name);
