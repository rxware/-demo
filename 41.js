// let range = {
//   from: 1,
//   to: 5,
//   [Symbol.iterator]() {
//     return {
//       current: this.from,
//       last: this.to,
//       next() {
//         if (this.current <= this.last) {
//           return {
//             done: false,
//             value: this.current++,
//           };
//         } else {
//           return {
//             done: true,
//           };
//         }
//       },
//     };
//   },
// };

let range = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    for (let value = 1; value <= this.to; value++) {
      yield value;
    }
  },
};

for (const number of range) {
  console.log(number);
}
