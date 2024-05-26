// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelCount = 0;
  for (i = 0; i < str.length; i++) {
    let chara = str.at(i);
    if (
      chara == "a" ||
      chara == "e" ||
      chara == "i" ||
      chara == "o" ||
      chara == "u"
    ) {
      vowelCount += 1;
    }
  }

  return vowelCount;
}

// I am somewhat getting the hang of writing code but I still get confused sometimes. This should've been easier than it was.
