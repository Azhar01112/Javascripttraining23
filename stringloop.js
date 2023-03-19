//Q.2
// let str = "my name is azhar";
// let split = str.split(" ");
// console.log(split);
// let finalAns = split.reduce(test, "");
// function test(answer, value) {
//   let firstPart = value.slice(0, 1).toUpperCase();
//   let secondPart = value.slice(1).toLowerCase();
//   answer = answer + firstPart + secondPart + " ";
//   return answer;
// }
// console.log(finalAns);

//Q. 9
// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [7, 8],
//   [9, 10],
// ];
// let newarray = [];

// for (let i = 0; i < arr.length; i++) {
//   let ans = arr[i];
//   let sum = ans[0] + ans[1];
//   newarray.push(sum);
// }
// console.log(newarray);

// #Q.4
//let arr = [1, 2, 3, 4, 5];
//console.log(arr.reverse());

//Q.5
// function uniqueword(str) {
//   let uniqueChars = "";
//   for (let i = 0; i < str.length; i++) {
//     if (uniqueChars.indexOf(str[i]) === -1) {
//       uniqueChars = uniqueChars + str[i];
//     }
//   }
//   return uniqueChars;
// }
// console.log(uniqueword("asdfghjkllkjhgfdsa"));

// Q.8

// let numbers = [10, 20, 30, 40, 50, 60, 70];

// let  sum = numbers
//   .filter((num) => num < 30 || num > 50)
//   .map((num) => num + 20)

// console.log(sum);
