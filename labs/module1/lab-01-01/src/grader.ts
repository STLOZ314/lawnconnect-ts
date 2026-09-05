type LetterGrade = "A" | "B" | "C" | "D" | "F";

function toLetterGrade(score: number): LetterGrade {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  }

  return "F";
}

function describeGrade(grade: LetterGrade | number): string {
  if (typeof grade === "number") {
    return `A score of ${grade} earns a ${toLetterGrade(grade)}.`;
  }

  return `The letter grade ${grade} represents a passing grade: ${grade !== "F"}.`;
}

console.log(`Score 95: ${toLetterGrade(95)}`);
console.log(`Score 74: ${toLetterGrade(74)}`);
console.log(describeGrade(88));
console.log(describeGrade("A"));
console.log(describeGrade("F"));