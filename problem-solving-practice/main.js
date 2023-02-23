// return the largest num in the array
// 1. loop through the array
// 2. determine if cuurnum is greater than prevnum
// if yes, replace high num with currnum
// return highnum

function determineHighNum(numsArr) {
    let highNum = 0;
    for (let i = 0; i < numsArr.length; i++) {
        let currNum = numsArr[i];
        if (currNum > i) highNum = currNum
    }
    return highNum;
}
console.log(determineHighNum([2, 6, 1, 8, 4, 10, 11]))
console.log(determineHighNum([7, 12, -3, -20, 2, 20]))

// return each word that has a certain char in it from an array
// 1. loop through the array
// 2. determine if the word has the char
// if yes, push that word into an array and return array

function charInWord (wordsArr, char) {
    let newArr = [];
    for (let i = 0; i < wordsArr.length; i++) {
        let word = wordsArr[i];
        if (word.toLowerCase().includes(char)) newArr.push(word)
    }
    return newArr
}
let arr1 = ["purple", "blue", "pink", "red", "white"];
let arr2 = ["cAt", "dog", "hamster", "spider", "monkey"];
console.log(charInWord(arr1, "i"));
console.log(charInWord(arr2, "a"));

// return num1 if it's divisible by num2
// 1. determine if num1 is divisible by num2
// if yes return true or false

function isDivisible (num1, num2) {
    if (num1 % num2 === 0) return true
    else return false
}
console.log(isDivisible(4, 2));
console.log(isDivisible(7, 2));
