// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

function isItLetter(character) {
  const regex = /[a-z]/g;
  if (character.toLowerCase().match(regex)) {
    return true;
  }
  return false;
}

// This problem was a little bit more complicated to figure out for me. I had to research ways to check if a character was a letter but had to include symbols as well.
