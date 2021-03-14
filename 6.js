let timeId = setTimeout(function tick() {
  console.log('tick');
  timeId = setTimeout(tick, 2000);
}, 2000);
