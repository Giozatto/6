function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Tony", "male", 37);
let student2 = new Student("Buzz", "female", 35);
let student3 = new Student("Alex", "male", 40);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  this.mark = mark;
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  for (let i = 0; i < marks.length; i++) {
    this.marks.push(marks[i]);
  }
}

Student.prototype.getAverage = function () {
  let average = 0;
  let sum = 0
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  average = sum / this.marks.length;
  return average;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete Student.marks;
  delete Student.subject;
}

student1.addMarks(5, 4, 5);
student1.setSubject("Algebra");
student1.addMark(8);
student1.addMark(4);
student1.addMark(5);
student1.exclude('Low grades')
console.log(student1.getAverage()); //4.6666
console.log(student1);
// {age: 37, gender: "male", marks: [5, 4, 5], name: "Tony", subject: "Algebra"}

