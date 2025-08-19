/*
Write a program using a for loop to calculate the sum of numbers from 1 to 100.
let sum = 0;
for (var i = 0; i <= 100; i++) {
  sum++;
}
console.log(sum);
*/

/*Write a program that starts from 10 and counts down to 1 using a while loop.

let num = 10;
while (num >= 1) {
  num--;
  console.log(num);
}
  */

/*Password correct check
let correctPassword = "1234";
let attempts = ["1111", "2222", "1234"];
let i = 0;
do {
  console.log("retry");
  i++;
} while (attempts[i] !== correctPassword);
console.log("access granted");
*/
let word = "javascript".toLowerCase();
let count = 0;
let vowels = ["a", "i", "e", "o", "u"];
for (let char in word) {
  if (vowels.includes(char)) count++;
}
console.log(count);
