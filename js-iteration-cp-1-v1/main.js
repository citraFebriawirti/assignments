function reverseUnique(word) {
  let newUnique = '';
  for (let j = word.length -1 ; j >= 0; j--) {
    if (word[j] == word[j - 1]) {
      continue;
    }
    newUnique += word[j]
  }
 return newUnique
}

console.log(reverseUnique('greating')); //gnitaerg
console.log(reverseUnique('learning')); //gninrael
console.log(reverseUnique('book')); // kob
console.log(reverseUnique('RuangGuru')); //uruGnauR
console.log(reverseUnique('I am reading a book how to hunt a deer')); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;
