class GradeBook {
  private scores: number[] = [];

  addScore(score: number): void {
    this.scores.push(score);
  }

  getAverage(): number {
    if (this.scores.length === 0) {
      return 0;
    }

    const total: number = this.scores.reduce(
      (sum, score) => sum + score,
      0,
    );

    return total / this.scores.length;
  }
}

const gradeBook = new GradeBook();
console.log(`Empty grade book average: ${gradeBook.getAverage()}`);

gradeBook.addScore(92);
gradeBook.addScore(85);
gradeBook.addScore(78);
console.log(`Grade book average: ${gradeBook.getAverage()}`);