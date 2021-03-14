class Stack {
  constructor() {
    // 用来记录栈的大小
    this.count = 0;
    // 用来记录栈中的元素
    this.items = {};
  }
  // 插入元素
  push(el) {
    this.items[this.count] = el;
    this.count++;
  }
  // 验证 栈是否为空和他的大小
  size() {
    return this.count;
  }
  isEmpty() {
    if (this.count === 0) {
      console.log("该栈为空");
      return true;
    } else {
      console.log("该栈不为空");
      return false;
    }
  }
  // 从栈中弹出元素
  pop() {
    if (this.count === 0) {
      console.log("该栈为空");
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  // 查看栈顶的值并将栈清空
  peek() {
    if (this.count === 0) {
      console.log("该栈为空");
    }
    // 最后一个值为栈顶
    return this.items[this.count - 1];
  }
  clear() {
    this.items = {};
    this.count = {};
  }

  // 创建toString
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let i = 0; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

let stack = new Stack();

stack.push("liSi");
stack.push("rexx");
console.log(stack);
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.toString());
