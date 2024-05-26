// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  let tracker = {};
  for (let i = 0; i < A.length; i++) {
    if (A[i] in tracker) {
      tracker[A[i]] += 1;
    } else {
      tracker[`${A[i]}`] = 1;
    }
  }

  for (item in tracker) {
    if (tracker[item] % 2 == 1) {
      return parseInt(item);
    }
  }
  return tracker;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// This was my first 6 kyu so it took me a while to understand. I had to have someone walk me through figuring this out. I somewhat still need practice with working with objects.
