


function forception(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
            newArr.push(arr1[i].split("").join("") + ":")
        for (let j = 0; j < arr2.length; j++) {
            newArr.push(arr2[j].toUpperCase().split("").join(""));
        }
    }
    return newArr;

};
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(forception(people, alphabet));
