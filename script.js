// Reduce Function....

// let array = [1, 3, 5, 7];
// const sumArray = (sum, num)=>{
//     return sum + num;
// }
// console.log(array.reduce(sumArray));

// const arrayWeWillDo = [
//     {
//       item: 'imac',
//       price: 1000,
//     },
//     {
//       item: 'ipad',
//       price: 500,
//     },
//     {
//       item: 'walkman',
//       price: 5353,
//     },
//   ];

//   get the price of the array of objects.....

// const sum1 = arrayWeWillDo.reduce((sum, value)=>{
//     return sum + value.price;
// }, 0);

// console.log(sum1);

// const array = [112,52,944, 33];

// const ans = array.filter(num =>{
//     return num % 2 === 0
// });

// console.log(ans);

const num1 = 10;
const num2 = "10";

console.log(num1 === num2); // false, since num1 is a number and num2 is a string

const str1 = "hello";
const str2 = "hello";

console.log(str1 === str2); // true, both str1 and str2 are strings with the same value

const bool1 = true;
const bool2 = 1;

console.log(bool1 === bool2); // false, even though both are truthy values, their data types are different (boolean and number)

// The Boolean value false.
// Zero (0) and negative zero (-0).
// The special value null.
// The special value undefined.
// The empty string "".
// The special value NaN (Not-a-Number).


