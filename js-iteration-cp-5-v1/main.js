function generateParenthesesPair(numberOfPairs) {
  //your code here
 if (numberOfPairs == 0) {
  return ''
 }
  return "(".repeat(numberOfPairs)+")".repeat(numberOfPairs)
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
