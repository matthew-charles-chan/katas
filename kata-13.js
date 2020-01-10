const urlDecode = function(text) {
  const result = {}
  let arraysWithoutSpecialChar = text.split('%20').join(' ').split('&')
  for(item of arraysWithoutSpecialChar) {
    let keyArray = item.split('=')
    for (i = 0; i < keyArray.length; i++) {
      result[keyArray[0]] = keyArray[1]
    }
  }
  return result
};



console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);