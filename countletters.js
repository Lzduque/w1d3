function countLetters(string) {
  var newString = string.split(" ").join("");
  var countedLetters = {};

  for (var i = 0 ; i < newString.length ; i++) {
    if (countedLetters[newString[i]] === undefined) {
      countedLetters[newString[i]] = 1;
    } else {
      countedLetters[newString[i]] ++;
    }
  }
return countedLetters;
}

console.log(countLetters("lighthouse in the house"));

