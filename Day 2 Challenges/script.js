// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

// Examples (Input -- => Output):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

function sortGiftCode(code) {
  return code.split("").sort().join("");
}

console.log(sortGiftCode("pqksuvy"));

// I was not able to think of these methods off the top of my head so I did have to look it up but once I did, it was easy to write the code.
