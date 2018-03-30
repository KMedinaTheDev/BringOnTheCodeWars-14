function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        temp = array[j];

    }
    return array;
}

function passwordGen(){
  let pwLen = Math.round(Math.random() * (20 - 6) + 6),
      possible = 'abcdefghijklmnopqrstuvwxyz'.split(""),
      lower = ~~(Math.random() * (pwLen/2 - 2)) + 2,
      upper = ~~(Math.random() * (pwLen/2 - lower - 1)) + 1,
      num = (pwLen - (lower + upper))

  let lowerCase = new Array(lower).fill(0).map((a,i) => possible[~~(Math.random() * 26)]),
      upperCase = new Array(upper).fill(0).map((a,i) => possible[~~(Math.random() * 26)].toUpperCase()),
      numbers = new Array(num).fill(0).map((a,i) => ~~(Math.random() * 10))
  return shuffleArray(lowerCase.concat(upperCase).concat(numbers)).join("");
}


// With pseudo code

// this function shuffles my array (holding the pw) & returns it (it is joined as a string when this fxn is called)
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        // hold current position

        var temp = array[i];
        // change the current position to whatever number position is generated in var j

        temp = array[j];

    }
    // return the shuffled array

    return array;
}

function passwordGen(){
  // determine the length of the password (must be between 6-20 characters)
  let pwLen = Math.round(Math.random() * (20 - 6) + 6),
  // one possible character is a letter
      possible = 'abcdefghijklmnopqrstuvwxyz'.split(""),
      // how many of the characters will be lowercase
      lower = ~~(Math.random() * (pwLen/2 - 2)) + 2,
      // how many of the characters will be uppercase
      upper = ~~(Math.random() * (pwLen/2 - lower - 1)) + 1,
      // how many numbers will the pw have
      num = (pwLen - (lower + upper))

// each of these will be an array of lowercase, and array of upperCase and an array of numbers
  let lowerCase = new Array(lower).fill(0).map((a,i) => possible[~~(Math.random() * 26)]),
      upperCase = new Array(upper).fill(0).map((a,i) => possible[~~(Math.random() * 26)].toUpperCase()),
      numbers = new Array(num).fill(0).map((a,i) => ~~(Math.random() * 10))
      // the arrays are concatinated and joined and then passed into the shuffleArray fxn
  return shuffleArray(lowerCase.concat(upperCase).concat(numbers)).join("");
}
