/**
 * celsiusToFahrenheit - converts temperature from Celsius to Fahrenheit
 *
 * @param {number} celsius - temperature in Celsius
 * @returns {number} - temperature in Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

/**
 * fahrenheitToCelsius - converts temperature from Fahrenheit to Celsius
 *
 * @param {number} fahrenheit - temperature in Fahrenheit
 * @returns {number} - temperature in Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

console.log(celsiusToFahrenheit(20));
console.log(fahrenheitToCelsius(82));
