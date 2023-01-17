for (let i = 0; i < 10; i++) {
    console.log(i)
};
for (let i = 9; i >= 0; i--) {
    console.log(i)
};


const fruit = ["banana", "orange", "apple", "kiwi"];
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
};


let nums = [];
for (let i = 0; i < 10; i++) {
    nums.push(i)
};
console.log(nums);

for (let i = 0; i < 101; i++) {
    if (i % 2 === 0) console.log(i)
};

//const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
//let everyOtherFruit = [];
//for (let i = 0; i < fruit2.length; i + 2) {
//    everyOtherFruit.push(fruit2[i])
//};
//console.log(everyOtherFruit);

const peopleArray = [
{
    name: "Harrison Ford",
    occupation: "Actor"
},
{
    name: "Justin Bieber",
    occupation: "Singer"
},
{
    name: "Vladimir Putin",
    occupation: "Politician"
},
{
    name: "Oprah",
    occupation: "Entertainer"
}
]

let names = [];
let occupations = [];
for (let i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
};
    console.log(names);
    console.log(occupations);
