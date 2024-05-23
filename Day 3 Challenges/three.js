// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Good Luck!

function convertHashToArray(hash) {
  let retval = [];
  for (x in hash) {
    let temporary = [];
    temporary.push(x);
    temporary.push(hash[x]);
    retval.push(temporary);
  }

  return retval;
}

// I had more difficulty trying to solve this problem. I had to look up more efficient ways to solving this problem. Definitely need more practice with this.