const urlDecode = function(text) {
  const result = {};
  let formattedArray = text.split('%20').join(' ').split('&');
  for (let item of formattedArray) {
    let keyArray = item.split('=');
    for (let i = 0; i < keyArray.length; i++) {
      result[keyArray[0]] = keyArray[1];
    }
  }
  return result;
};



console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);