let obj = {
  0:'hello',
  1:'world',
  length:2
}
obj.join = Array.prototype.join;
console.log(obj.join(','))