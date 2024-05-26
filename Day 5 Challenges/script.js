// You'll be given a string of characters as an input. Complete the function that returns a list of strings: (a) in the reverse order of the original string, and (b) with each successive string starting one character further in from the end of the original string.

// Assume the original string is at least 3 characters long. Try to do this using slices and avoid converting the string to a list.

// Examples
// '123'   ==>  ['321', '21', '1']
// 'abcde' ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']

function reverseSlice(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.at(i);
  }

  let reversedArr = [];
  reversedArr.push(reversed);
  for (let i = 1; i < str.length; i++) {
    reversedArr.push(reversed.slice(i));
  }
  return reversedArr;
}

console.log(reverseSlice("abcde"));

// This one was a bit trickier for me to figure out. It took me a little longer because I had to rsesearch the slice method.
