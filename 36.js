function Promise(executor) {
  // 设置返回的promise的对象中的状态，以及结果 将属性绑定在生成的新对象中
  this.PromiseState = "pending";
  this.PromiseResult = null;
  // 用数组保存回调函数是为了让promise实例对象可以多次调用then
  this.callback = [];
  let that = this;
  // resolve表示成功时的函数
  function resolve(data) {
    // 判断状态 让状态只能从等待态转为成功态
    if (that.PromiseState !== "pending") return;
    that.PromiseState = "resolved";
    that.PromiseResult = data;
    // 如果对象中有此函数则说明函数保存了 则可以调用
    setTimeout(() => {
      that.callback.forEach((item) => {
        item.onResolved(data);
      });
    });
  }
  // reject表示失败时的函数
  function reject(data) {
    // 判断状态 让状态只能从等待态转为失败态
    if (that.PromiseState !== "pending") return;
    that.PromiseState = "rejected";
    that.PromiseResult = data;
    setTimeout(() => {
      // 改变函数的状态
      that.callback.forEach((item) => {
        item.onRejected(data);
      });
    });
  }
  // 当执行器函数出现错误 抛出错误
  try {
    // 当实例出一个新对象时立刻执行回调函数
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  let that = this;
  // 判断参数 异常穿透算法
  if (typeof onRejected !== "function") {
    onRejected = (reason) => {
      throw reason;
    };
  }

  if (typeof onResolved !== "function") {
    onResolved = (value) => value;
  }
  return new Promise((resolve, reject) => {
    function callback(type) {
      try {
        // 获取成功回调的值
        let result = type(that.PromiseResult);
        // 判断值是否为Promise对象 不是直接返回正确的值
        if (result instanceof Promise) {
          result.then(
            (v) => {
              resolve(v);
            },
            (reason) => {
              reject(reason);
            }
          );
        } else {
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    }
    // 如果状态为成功态 则调用成功的函数

    if (this.PromiseState === "resolved") {
      setTimeout(callback, 1000, onResolved);
    }

    // 如果状态为失败态 则调用失败的函数
    if (this.PromiseState === "rejected") {
      setTimeout(callback, 1000, onRejected);
    }

    // 为了让异步执行 将回调函数保存起来 当状态变为成功或失败的时候在调用他
    if (this.PromiseState === "pending") {
      this.callback.push({
        onResolved: function () {
          callback(onResolved);
        },
        onRejected: function () {
          callback(onRejected);
        },
      });
    }
  });
};

Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};

Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then(
        (v) => {
          resolve(v);
        },
        (reason) => {
          reject(reason);
        }
      );
    } else {
      resolve(value);
    }
  });
};

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
};

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let arr = [];
    // 遍历 数组
    for (let i = 0; i < promises.length; i++) {
      // 检查每一个promise 对象
      promises[i].then(
        (v) => {
          // 使用count来检查成功状态对象的个数 如果全都变为成功态则调用成功函数
          count++;
          // 输出 数组的值
          arr[i] = v;
          if (count === promises.length) {
            resolve(arr);
          }
        },
        (r) => {
          reject(r);
        }
      );
    }
  });
};

Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      // 检查每一个promise 对象
      promises[i].then(
        (v) => {
          // 谁先返回状态就会执行resolve函数 一旦改变状态时 整个promise返回成功状态将不会被后面所以影响
          resolve(v);
        },
        (r) => {
          reject(r);
        }
      );
    }
  });
};
