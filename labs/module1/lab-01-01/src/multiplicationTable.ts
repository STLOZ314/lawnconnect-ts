function multiplicationTable(n: number): [number, number][] {
  const result: [number, number][] = [];

  for (let factor = 1; factor <= 10; factor++) {
    result.push([factor, factor * n]);
  }

  return result;
}

function printTable(table: [number, number][], n: number): void {
  for (const [factor, product] of table) {
    console.log(`${factor} x ${n} = ${product}`);
  }
}

const tableOfFive = multiplicationTable(5);
printTable(tableOfFive, 5);

const tableOfSeven = multiplicationTable(7);
printTable(tableOfSeven, 7);