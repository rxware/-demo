let start = Date.now();
let times = [];
setTimeout(function run() {
  times.push(Date.now() - start); // 将每次调用的时间放入数组
  // 100 毫秒之后输出延时信息
  if (start + 100 < Date.now()) console.log(times);
  else setTimeout(run); // 否则继续调度
});
