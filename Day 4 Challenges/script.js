// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(arr) {
  return Math.min(...arr);
}

// I had to research Math methods which was useful in figuring this out. I wouldn't have known how to figure it out without using the method.
