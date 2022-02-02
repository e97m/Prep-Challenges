'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    let separated = str.replace(/[\[\]?.,\/#!$%\^&\*;:{}=\\|_~()]/g, "")
    let lastSpace = separated.lastIndexOf(' ')
    if (lastSpace == -1) {
        return separated
    } else {
        return separated.slice(lastSpace + 1)

    }
    let arr = separated.split(" ");
    let last = arr[arr.length]
    return last
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    let separated = str.replace(/[\[\]?.,\/#!$%\^&\*;:{}=\\|_~()]/g, "")
    let arr = separated.split(" ");
    let lastWord = arr[arr.length - 1]
    return lastWord
    return
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    let separated = str.replace(/[\[\]?.,\/#!$%\^&\*;:{}=\\|_~()]/g, "")
    let arr = separated.split(" ");
    let i = arr.indexOf('I')
    let am = arr.indexOf('am')
    let was = arr.indexOf('was')
    if (i >= 0) arr.splice(i, 1, 'We')
    if (am >= 0) arr.splice(am, 1, 'are')
    if (was >= 0) arr.splice(was, 1, 'were')
    if (i < 0 && am < 0 && was < 0) { return str }
    return arr.join(' ')
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

// const arrToStr = (arr) => {
//     if (arr.length <= 5) { return arr.join(' ') }
//     if (arr.length > 5) {
//       console.log(arr)
//         let newArr = arr.splice(4, 0, ',')
//         return newArr.join(' ')
//     } else return 'more than 10 words'
// }



const arrToStr = (arr) => {
//       if (arr.length > 5){
//   for (let i =1 ; i<arr.length/5 ; i++){
//       let newArr = arr.splice((6*i-1), 0, ',')
//       var str = newArr.join(' ') 
//   }return str
//   }else return arr.join(' ')
  }




// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------




const letterCounter = (str) => {
    // let v3 = /(.)\1{3}/g , v2 = /(.)\1{2}/g , v1 = /(.)\1{1}/g ;
    // if (v3.test(str)) {
    //     str.replace(v2 , 3)
    // } else if (v2.test(str)){
    //     str.replace(v1 , 2)
    // }else if (v1.test(str)){
    //     str.replace(/(.)\1{0}/g , 1)
    // }
    // return str
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };