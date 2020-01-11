let numberOfVowels = function(data) {
  let vowelCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (letter of data) {
    for (vowel of vowels) {
      if (letter === vowel) {
        vowelCount += 1
      }
    }
  }
  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));