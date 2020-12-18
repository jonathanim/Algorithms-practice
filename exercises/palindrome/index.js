// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {

// let array = str.split('');
//
// let reversed = '';
// for (let char of array) {
//   reversed = char + reversed
// }
//
// if(reversed == str){
//   return true
// }else {
//   return false
// }
function palindrome(str) {

let reverse = str.split('').reverse().join('');

return reverse === str

}

module.exports = palindrome;