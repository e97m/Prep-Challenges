'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------

//old solution
// function odd (arr){
//     arr.forEach(element => {
//         oddArry
//         if (element % 2 != 0) {
//             oddArry.push(element)
//         }
//     });
//     return oddArr
// }

const oddFiltration = (arr) => {
   const newArr = arr.filter(element => element%2 != 0) 
   return newArr
}

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {
    const newArr = arr.filter(element => element.tech=='JS' && element.yearsOfExperience>4) 
    let finallArr = []
    for(let i=0; i<newArr.length; i++){
        newArr[i].fullName= `${newArr[i].firstName} ${newArr[i].LastName}`
        delete newArr[i].firstName;
        delete newArr[i].LastName;
        delete newArr[i].yearsOfExperience;
        finallArr.push(newArr[i])
    }
return finallArr
}

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

function checkVowel(word){
    let vowel = (/\w+[aeiou]\w+|[aeiou]\w+|\w+[aeiou]/gi).test(word)
    let newVowel = !vowel
    return newVowel
}

const vowelsFiltration = (arr) => {
    const filtered = arr.filter(checkVowel)  
    return filtered 
} 

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {
    let differences = arr1.filter(skill => !arr2.includes(skill)) +','+ arr2.filter(skill => !arr1.includes(skill))
    let diffArr = differences.split(',')
    return diffArr
}


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

