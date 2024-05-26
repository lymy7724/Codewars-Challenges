// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// Somewhat easy and straightforward to figure out. Below is just different types of ways to write the forEach method - just for me to study.

// for (x in arr) {
//   if (x >= 0) {
//     sum += x;
//   }
// }

// arr.forEach(function (ar) {
//   if (ar >= 0) {
//     sum += ar;
//   }
// });

// arr.forEach((ar) => {
//   if (ar >= 0) {
//     sum += ar;
//   }
// });
