// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  let retval = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let newWord = str.at(i);
    retval = retval + newWord;
  }
  return retval;
}

// This problem was okay to figure out because we just recently finished an similar activity. I would still like to practice this more.
