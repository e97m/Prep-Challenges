'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    let mid, myInt
    let arr = str.split(' ')
    let num = arr.length
    if (num % 2 == 0) {
        mid = arr[(arr.length / 2)]
    } else {
        myInt = Math.floor((arr.length) / 2)
        mid = arr[myInt]
    }
    return mid.length
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    let arr1 = [], arr2 = [], noSambols1 = [], noSambols2 = []
    noSambols1 = str1.replace(/[^a-z]/gi, "")
    noSambols2 = str2.replace(/[^a-z]/gi, "")
    arr1 = noSambols1.split('').sort()
    arr2 = noSambols2.split('').sort()
    let newStr1 = arr1.join('')
    let newStr2 = arr2.join('')
    console.log(newStr1)
    console.log(newStr2)
    return (newStr1 === newStr2)
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };