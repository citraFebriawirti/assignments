function countAndSum(number) {
  //your code here
  let total = 0;
  let count = 1;
  for(let i = 0; i < number; i++) {
    total += count;
    if (count == 3) {
    count = 1
    }else {
      count = count + 1
  }
}
  return total
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;
