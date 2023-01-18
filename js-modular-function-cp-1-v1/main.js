function kelvinToCelsius(kelvin) {
  // your code here
  let hasil1 = parseFloat((kelvin - 273.15).toFixed(2))
 
  return hasil1
  
}

function kelvinToFahrenheit(kelvin) {
  // your code here
  let hasil2 = parseFloat(((kelvin - 273.15) * 9/5 + 32).toFixed(2))
  
  return hasil2
}

function celsiusToFahrenheit(celsius) {
  // your code here
  let hasil3 = parseFloat(((celsius * 9/5) + 32).toFixed(2))
  
  return hasil3
}

function celsiusToKelvin(celsius) {
  // your code here
  let hasil4 = parseFloat((celsius + 273.15).toFixed(2))
  
  return hasil4
}

function fahrenheitToKelvin(fahrenheit) {
  // your code here
  let hasil5 = parseFloat(((fahrenheit - 32) * 5/9 + 273.15).toFixed(2))
  
  return hasil5
}

function fahrenheitToCelsius(fahrenheit) {
  // your code here
  let hasil6 = parseFloat(((fahrenheit - 32) * 5/9).toFixed(2))
  
  return hasil6
}

function convertTemperature(temperature, initialUnit, finalUnit) {
 

  if (initialUnit == 'K' &&  finalUnit == 'C') {
    let konversi1 = kelvinToCelsius(temperature)
    return konversi1
  } else if (initialUnit == 'K' && finalUnit == 'F') {
    let konversi2 = kelvinToFahrenheit(temperature)
    return konversi2
  } else if (initialUnit == 'C' && finalUnit == 'F') {
    let konversi3 = celsiusToFahrenheit(temperature)
    return konversi3
  }else if (initialUnit == 'C' && finalUnit == 'K') {
    let konversi4 = celsiusToKelvin(temperature)
    return konversi4
  }else if (initialUnit == 'F' && finalUnit == 'K') {
    let konversi5 = fahrenheitToKelvin(temperature)
    return konversi5
  }else if (initialUnit == 'F' && finalUnit == "C") {
    let konversi6 = fahrenheitToCelsius(temperature)
    return konversi6
  }

  
}

console.log(convertTemperature(0, 'C', 'K')); // 273.15
console.log(convertTemperature(0, 'C', 'F')); // 32

console.log(convertTemperature(0, 'F', 'C')); // -17.78
console.log(convertTemperature(0, 'F', 'K')); // 255.37

console.log(convertTemperature(0, 'K', 'C')); // -273.15
console.log(convertTemperature(0, 'K', 'F')); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
