function trasureHunter(dailyLog) {
  treasure = 0;

  for (i = 0; i < dailyLog.length; i++) {
    if (dailyLog[i] === '$') {
      treasure += 100;
    } else if (dailyLog[i] === 'x') {
      if (treasure < 10) {
        treasure = 0;
      } else {
        treasure -= 10;
      }
    } else if (dailyLog[i] === '#') {
      if (treasure == 0) {
        treasure = 0;
      } else {
        treasure = treasure * 0.5;
      }
    }
  }

  return treasure;
}

console.log(trasureHunter('$x$#x$')); // 185
console.log(trasureHunter('$$#x$$')); // 290
console.log(trasureHunter('x$#x$#x$')); // 157.5
console.log(trasureHunter('xx$#$#$#$###xx')); // 3.125

module.exports = trasureHunter;
