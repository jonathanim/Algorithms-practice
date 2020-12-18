// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

let vs = ['a', 'e', 'i', 'o', 'u'];

let arrOfString = str.split('');

let vowel = 0

  for ( let i = 0; i < arrOfString.length; i++){
    let charToLower = arrOfString[i].toLowerCase()
      for(let v = 0; v < vs.length; v++){
        if(charToLower === vs[v]){
          vowel++
        }
      }
  }


return vowel




}

module.exports = vowels;
