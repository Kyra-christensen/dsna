// Title case words
function titleCase(input) {
  const sentence = input.toLowerCase();
  const word = sentence.split(' ');

  const firstLetter = word.map((words) => words[0].toUpperCase() + words.slice(1)).join(' ');

  return firstLetter;
}

console.log(titleCase('alchemy ROCKS goLD'));


// anagrams

