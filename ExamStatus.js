function defineExamStatus(mark, isFinalExam) {
  if (isFinalExam) {
    return mark >= 90;
  }

  return mark >= 89 && mark <= 100;
}

console.log(defineExamStatus(90, false));
