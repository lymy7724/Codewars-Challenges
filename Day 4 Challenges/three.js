// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

function countSheep(num) {
  let murmur = "";

  if (num == 0) {
    return "";
  }

  for (let i = 1; i <= num; i++) {
    murmur += `${i} sheep...`;
  }

  return murmur;
}

// I made this way harder than it needed to be. But once I solved it, I realized how simple it actually was. Just me overthinking :/
