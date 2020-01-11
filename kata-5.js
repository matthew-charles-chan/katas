const urlEncode = function(text) {
  let encodedString = '';
  let string = text
  if (string[0] === " ") {
    string.splice(0,1)
    console.log(string)
  } else if (string[string.length - 1 === 0]) {
    string.splice(string.length - 1)
  }
  encodedString = string.split(' ').join('%20')
  return encodedString;
};

// console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
// console.log(urlEncode("blue is greener than purple for sure"));