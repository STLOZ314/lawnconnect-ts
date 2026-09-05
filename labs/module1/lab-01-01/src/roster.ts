interface Student {
  name: string;
  id: number;
  isEnrolled: boolean;
  gpa?: number;
}

const students: Student[] = [
  { name: "Ava Chen", id: 1001, isEnrolled: true, gpa: 3.8 },
  { name: "Marcus Hill", id: 1002, isEnrolled: false, gpa: 2.9 },
  { name: "Nora Patel", id: 1003, isEnrolled: true },
  { name: "Diego Ruiz", id: 1004, isEnrolled: true, gpa: 3.4 },
];

function averageGpa(students: Student[]): number {
  const withGpa: Array<Student & { gpa: number }> = students.filter(
    (student): student is Student & { gpa: number } =>
      typeof student.gpa === "number",
  );

  if (withGpa.length === 0) {
    return 0;
  }

  const total: number = withGpa.reduce((sum, student) => sum + student.gpa, 0);

  return total / withGpa.length;
}

function enrolledNames(students: Student[]): string[] {
  return students
    .filter((student) => student.isEnrolled)
    .map((student) => student.name);
}

console.log(`Average GPA (students with GPA only): ${averageGpa(students)}`);
console.log(`Enrolled students: ${enrolledNames(students).join(", ")}`);