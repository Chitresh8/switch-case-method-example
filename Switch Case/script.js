//Switch case method

const subjects = [
  { subject: "telugu", marks: "95" },
  { subject: "english", marks: "75" },
  { subject: "hindi", marks: "97" },
  { subject: "maths", marks: "65" },
  { subject: "physics", marks: "70" },
  { subject: "biology", marks: "77" },
  { subject: "social", marks: "80" },
];

let totalMarks = subjects
  .map((el) => +el.marks)
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);

console.log(totalMarks, "totalMarks");

let percentage = totalMarks / subjects.length;
console.log(percentage, "%");

const grade = "Pass";
// const grade="Fail";
switch (grade) {
  case "Pass":
    console.log("Congratualtions..!!!");
    break;
  case "Fail":
    console.log("Better Luck Next Time");
}
