function countPositionOfLetters(string) {
  var countedLetters = {};

  for (var i = 0 ; i < string.length ; i++) {
    if (countedLetters[string[i]] === undefined) {
      countedLetters[string[i]] = [i];
    } else {
      countedLetters[string[i]].push(i);
    }
  }
return countedLetters;
}

console.log(countPositionOfLetters("lighthouse in the house"));

