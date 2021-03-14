let p = new Promise((resolve, reject) => {
  resolve("输出正确");
});
let value = Promise.resolve(p);
console.log(value);
