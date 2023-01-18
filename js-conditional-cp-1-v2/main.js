function hollyKnight(name, stamina, undead) {
  if (stamina > undead) {
    result = "Holly Knight " + name + " memenangkan pertempuran dengan mudah!";
  } else if (stamina == undead) {
    result = "Beruntung Holly knight " + name +" berhasil mengalahkan " + stamina + " undead!";
  } else {
    result = "Holly knight " + name + " mengalahkan " + stamina + " undead, namun sayang holly knight " + name + " gugur di medan perang!";
  }
  return "name = " + name + "\nstamina = " + stamina + "\nundead = " + undead + "\nresult = " + result
} 


console.log(hollyKnight('Lancelot', 30, 20)); // Holly Knight Lancelot memenangkan pertempuran dengan mudah!
console.log(hollyKnight('Gallahad', 10, 10)); // Beruntung Holly knight Gallahad berhasil mengalahkan 10 undead!
console.log(hollyKnight('Tristan', 100, 110)); // Holly knight Tristan mengalahkan 100 undead, namun sayang holly knight Tristan gugur di medan perang!

module.exports = hollyKnight;
