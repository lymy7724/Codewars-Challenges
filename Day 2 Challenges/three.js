// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// examples:
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n) {
  const list = [];

  for (let i = 0; i <= n; i++) {
    list.push(Math.pow(2, i));
    console.log(Math.pow(2, i));
  }
  console.log(list);
  return list;
}

// I had to research the math method. I knew the general idea on what I needed to do but I had issues on figuring out how to get power of a number.
