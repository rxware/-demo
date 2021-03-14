const fs = require("fs");
// fs.readFile("./container", (err, data) => {
//   if (err) throw new Error("出错了");
//   console.log(data.toString());
// });

let p = new Promise((resolve, reject) => {
  fs.readFile("./container", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data.toString());
    }
  });
});

p.then(
  (value) => {
    console.log(value);
  },
  (err) => {
    console.log(err);
  }
);
