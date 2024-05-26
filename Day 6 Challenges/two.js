// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let newstring = str;
  for (let i = 0; i < str.length; i++) {
    let chara = str.at(i);
    if (
      chara == "a" ||
      chara == "e" ||
      chara == "i" ||
      chara == "o" ||
      chara == "u" ||
      chara == "A" ||
      chara == "E" ||
      chara == "I" ||
      chara == "O" ||
      chara == "U"
    ) {
      newstring = newstring.replace(chara, "");
    }
  }
  return newstring;
}

// This took me so long to figure out and I am still not sure why it works, if I'm being honest.
