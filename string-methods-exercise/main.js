function capAndLowerCase(string) {
    return string.toUpperCase() + string.toLowerCase()
};

console.log(capAndLowerCase("I love PandaBears"));


function findMiddleIndex(string) {
    let halfString = string.length / 2;
    return Math.floor(halfString);
};

console.log(findMiddleIndex("PandaBears"));


function returnFirstHalf(string) {
    let firstPart = string.slice(0, findMiddleIndex(string));
    return firstPart;
};

console.log(returnFirstHalf("raspberries"))


function halfCapHalfLowerCase (string) {
    let firstHalf = returnFirstHalf(string).toUpperCase();
    let secondHalf = string.slice(findMiddleIndex(string), string.length).toLowerCase();
    let newWord = firstHalf + secondHalf
        if (string.length % 2 !== 0) return Math.floor(newWord)
    else return newWord
};

console.log(halfCapHalfLowerCase("blue"));
console.log(halfCapHalfLowerCase("blues"));


function capWords(string) {
    let wordsArr = string.split(" ")
    for (let i = 0; i < wordsArr.length; i++) {
        wordsArr[i] = wordsArr[i][0].toUpperCase() + wordsArr[i].substring(1)
    };
    const newWordsArr = wordsArr.join(" ")
    return newWordsArr
};

console.log(capWords("if i was a coconut head"))
