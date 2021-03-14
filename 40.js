function* generate() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
let generator = generate();
// console.log(generator);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().done);
// for (let value of generator) {
//   console.log(value);
// }
let arr = [...generator];
console.log(arr);
