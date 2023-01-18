function deretanAngkaHinggaN(n) {
  let output = ""
  if (n <= 1) {
    return "Incorrect param"
  } else {
    for (let i = n - 1; i >= 1; i--) {
      output += i + ""
      for (let a = i - 1; a >= 1; a--) {
        output += a + ""
      }
    }
  }
    return output
  }

console.log(deretanAngkaHinggaN(5));

module.exports = deretanAngkaHinggaN;
