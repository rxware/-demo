function* gen() {
  let result = yield "2+2=?";
  console.log(result);
}
let ge = gen();
let question = ge.next().value;
ge.next(4);
