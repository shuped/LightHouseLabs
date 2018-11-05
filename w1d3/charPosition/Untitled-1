var characterPositions = function (input) {
    var lowerInput = Array.from(input.toLowerCase());
    var output = {};
    lowerInput.forEach( (letter, index) => {
      if (!output.hasOwnProperty(letter)) {
        output[letter] = [];
        output[letter].push(index);
      } else if (output.hasOwnProperty(letter)){
        output[letter].push(index);
      }
    });
    delete output[' '];
    return output;
  }
console.log(characterPositions("hello world"))