function task1() {
  const element = document.getElementById("random-number").innerHTML = "11"
  return element
}

function task1_1() {
  const element = document.getElementById("random-number-class").innerHTML = "18"
  return element
}

function task2() {
  const element = document.getElementById("task-2").innerHTML = "100";
  return element
}

function task3() {
  document.getElementById("task-3").innerHTML = "100"
}

function task3_1() {
  document.getElementById("task-3-1").innerHTML = ""
}

console.log("Number inside random-number element is: ", task1());
console.log("Number inside random-number-class element is: ", task1_1());
task2();
task3();
task3_1();

if (typeof module !== "undefined") {
  module.exports = { task1, task1_1, task2, task3, task3_1 };
}
