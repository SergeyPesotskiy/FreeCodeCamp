/*Chaining If Else Statements

if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}

Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge*/

/*function testSize(num) {
  if (num < 5) return "Tiny";
  else if (num < 10) return "Small";
  else if (num < 15) return "Medium";
  else if (num < 20) return "Large";
  else return "Huge";
}*/

function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }
}
testSize(7);

console.log(testSize(4)); //Tiny
console.log(testSize(9)); //Small
console.log(testSize(14)); //Medium
console.log(testSize(19)); //Large
console.log(testSize(20)); //Huge
