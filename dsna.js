// Title case words
function titleCase(input) {
  const sentence = input.toLowerCase();
  const word = sentence.split(' ');

  const firstLetter = word.map((words) => words[0].toUpperCase() + words.slice(1)).join(' ');

  return firstLetter;
}

console.log(titleCase('alchemy ROCKS goLD'));


// at

function at(arr, index) {
  const arrPositive = arr[index];
  const arrReversed = arr.reverse();
  const arrNegative = arrReversed[-index - 1];

  if (index >= 0) {
    return arrPositive;
  } else {
    return arrNegative;
  }
}

console.log(at(['a', 'b', 'c', 'd', 'e'], 1));
console.log(at(['a', 'b', 'c', 'd', 'e'], -2));

//anagrams
function anagrams(wordOne, wordTwo) {
  const stringOne = wordOne.split('').sort().join('');
  const stringTwo = wordTwo.split('').sort().join('');

  if (stringOne === stringTwo) {
    return 'true';
  } else {
    return 'false';
  }
}

console.log(anagrams('superintended', 'unpredestined'));
console.log(anagrams('pictorialness', 'documentarily'));
//unique-char

