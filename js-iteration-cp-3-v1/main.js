function printNumber(totalNumber) {
    var str = "123",
        mod = totalNumber % 3,
        mul = Math.floor(totalNumber / 3);
    if (mod == 0){
        return str.repeat(mul)
    } else {
        if (mod == 1){
            return str.repeat(mul).concat("1");
       
        } else {
            return str.repeat(mul).concat("12")
        }
    }
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber
