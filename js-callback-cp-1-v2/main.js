function calculate(number1, number2, callback) {
  if (number1 % 2 == 0 && number2 %2 == 0) {
    return callback(number1 - number2)
  } else if (number1 % 2 == 0) {
    return callback(number1 + number2)
  } else if (number1 % 2 != 0) {
    return callback(number1 * number2)
  }
}




module.exports = calculate;
  