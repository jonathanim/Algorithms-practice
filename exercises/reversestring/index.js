// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   const arr = str.split('');
//   const reversed = arr.reverse();
//   const newStr = reversed.join('');
//
// return newStr
//
// }
//
// module.exports = reverse;



// function reverse(str) {
//   const newStr = str.split('').reverse().join('');
//
//   return newStr
//
// }
//
// module.exports = reverse;


// function reverse(str) {
//   let newStr = '';
//
//   for( let char of str){
//     newStr = char + newStr
//   }
//   return newStr
// }
//
// module.exports = reverse;



function reverse(str){

  let array = str.split('');
  return array.reduce((reversed, curr) =>  curr + reversed)

}


module.exports = reverse;
