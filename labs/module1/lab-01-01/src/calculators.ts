function mpgCalculator(milesDriven: number, gallonsUsed: number): number {
  return milesDriven / gallonsUsed;
}

function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

function incomeTax(income: number, rate: number): number {
  return income * rate;
}

function compoundInterest(
  principal: number,
  rate: number,
  years: number,
): number {
  return principal * (1 + rate) ** years;
}

console.log(`MPG (300 miles, 10 gallons): ${mpgCalculator(300, 10)}`);
console.log(`MPG (450 miles, 15 gallons): ${mpgCalculator(450, 15)}`);

console.log(`Fahrenheit (0 C): ${celsiusToFahrenheit(0)}`);
console.log(`Fahrenheit (25 C): ${celsiusToFahrenheit(25)}`);

console.log(`Income tax ($50,000 at 20%): ${incomeTax(50000, 0.2)}`);
console.log(`Income tax ($72,000 at 25%): ${incomeTax(72000, 0.25)}`);

console.log(
  `Compound interest ($1,000 at 5% for 3 years): ${compoundInterest(1000, 0.05, 3)}`,
);
console.log(
  `Compound interest ($2,500 at 4% for 5 years): ${compoundInterest(2500, 0.04, 5)}`,
);