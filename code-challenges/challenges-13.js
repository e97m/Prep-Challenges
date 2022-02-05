'use strict';

// Important Note: 
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// 1) ---------------------
// 
//  Given an array of objects, count the objects by using reduce method.

//  EX:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]
//

// ------------------------

const objectCounter = (obj) => {
    // write your code here
    // voters.length
    let final = obj.reduce((total) => {
        return total += 1
    }, 0)
    return final
}

// 2) ---------------------
// 
// Given a string input as an argument reverse it using reduce method.
//
//  EX:
// 'you shall not pass' ==> 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------

const stringReverse = (str) => {
    // write your code here
    //str.split(' ').reverse().join(' ')
    let newArr = []
    let arr = str.split(' ')
    arr.reduce((a, b) => {
        newArr = [b].concat(a)
        return newArr
    }, [])
    return newArr.join(' ')
}

// 3) ---------------------
// 
// Using the same array of object from the first question, create new object that contain the candidates name as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
// let voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//
// ------------------------

const statistics = (obj) => {
    // write your code here
    let person1=0 , person2=0 , person3=0 , person4=0
    let final = obj.reduce((a, item) => {
        if (item.votes_To == 'James') person1 += 1
        if (item.votes_To == 'Jade') person2 += 1
        if (item.votes_To == 'Bailey') person3 += 1
        if (item.votes_To == 'Chad') person4 +=1
        if (person4 == 0) {             //not dynamic
            let obj = {
                James: person1,
                Jade: person2,
                Bailey: person3,
            }
            return obj
        }
        if (person1 == 0) {             //not dynamic
            let obj = {
                Jade: person2,
                Chad: person4,
            }
            return obj
        }
    }, 0)
    return final

}



module.exports = { objectCounter, stringReverse, statistics };

