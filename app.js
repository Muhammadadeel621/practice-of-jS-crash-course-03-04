// function greeting(studentName) {
//   console.log("Welcome " + studentName);
// }

// greeting("Adeel");
// greeting("Noman");
// greeting("efe");
// greeting("Adeefee");
// greeting("Ae2e");

// function employee(fileNo) {
//   return "Working on file no: " + fileNo;
// }

// let data = employee(7);
// console.log(data);

// function add(num1, num2) {
//   return num1 + num2;
// }

// let result = add(5, 7);
// console.log(result);

// Recursion

// function writeData(data, times) {
//   document.write(data);
//   if (times > 0) {
//     writeData(data, times - 1); // 6,1 : 5,2 : 4,3 : 3,4 : 2,5 : 1,6 : 0,7
//   }
// }

// writeData("adeel ", 6);

// function factorial(num) {
//   if (num > 1) {
//     return num * factorial(num - 1); // 7 * 6 * 5 * 4 * 3 * 2 * 1
//   } else {
//     return 1;
//   }
// }
// let ans = factorial(4);
// console.log(ans);

// let abc = 7; // global scope
// function print(def) {
//   // def = local scope
//   return function (ghi) {
//     console.log(def + ghi);
//   };
// }

// let innerfunction1 = print(8);
// let innerfunction2 = print(7);
// innerfunction1(8);
// innerfunction2(9);

//     5th Class

// Array
// let january = "January";
// let febru

// let months = ["January", "February", "March", "April"];
// months[4] = "May"; // Not recommended;

// let shouldIStore = prompt("Array me value rakhun?");

// if (shouldIStore === "yes") {
//   months.push("May");
// }
// console.log(months);

// let students = [
//   "adeel",
//   "noman",
//   "ahmed",
//   "hasan",
//   "huzaifa",
//   "siddiq",
//   "kamran",
// ];

// console.log(students);

// students.push("yarooq");
// students.pop();
// students.shift();
// students.unshift("adeelrao");
// console.log(students.length);

// students.splice(2, 3, "owais", "hanan", "rehan", "farooq");
// let newStd = students.slice(2.5);
// console.log(students);
// console.log(newStd);

// let arr = ["mango", "orange", "grapes", "carrot", "onion"];
// arr.forEach // loops through array values
// arr.forEach(function (val, index) {
//   console.log(index, val);
// });

// arr.filter()// Filters Array values
// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];
// let filteredArr = arr.filter(function (val) {
//   return val % 2 === 0;
//    or
// if (val % 2 === 0) {
//     return true;
// } else {
//     return false;
// }
// });
// console.log(filteredArr);

// arr.sort() // Sorts Array values
// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];
// let sortedArr = arr.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log(sortedArr);

// reduce

// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];

// let total = arr.reduce(function (prevValues, currVal) {
//   return prevValues + currVal;
// }, 0);

// console.log(total);

// let arr = ["Happy", "Birthday", "Ameen"];
// let finalString = arr.reduce(function (prevValues, currVal) {
//   return prevValues + " " + currVal;
// }, "");

// console.log(finalString);

// let arr = ["Happy", "Birthday", "Ameen"];
// let finalString = "";

// arr.forEach(function (val) {
//   finalString = finalString + " " + val;
// });
// console.log(finalString);
