function fizzbuzz () {
    let array = []
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) console.log("fizz");
        else if (i % 5 === 0) console.log("buzz");
        else if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz")
        else console.log(i)
        array.push(i)
    }
    console.log(array)
    return array
};
console.log(fizzbuzz());

// function fizzbuzzCount(array) {
//     console.log(array, "test 2")
//     let countObj = {}

//     for (let i = 0; i < array.length; i++) {
//         //let fizzCount = 0;
//         //let buzzCount = 0;
//         //let fizzbuzzCount = 0;
//         let currChar = array[i];
//         if (currChar === undefined)  countObj[fizz] =1
//         else countObj[fizz]++
//         if (currChar === undefined) countObj[buzz] =1
//         else countObj[buzz]++
//         if (currChar === undefined) countObj[fizzbuzz] =1
//         else countObj[fizzbuzz++]
//     }
//     return countObj;
// }
// console.log(fizzbuzzCount(fizzbuzz()))

// function fizzbuzzCount(array) {
//     console.log(array, "test 2")

//     for (let i = 0; i < array.length; i++) {
//         let fizzCount = 0;
//         let buzzCount = 0;
//         let fizzbuzzCount = 0;

        //let countObj = {}

        // for (let i = 1; i <= 100; i++) {
        //     if (i % 3 === 0) {
        //         fizzCount ++
        //         console.log("fizzCount: " + fizzCount)
        //     }
        //     else if (i % 5 === 0) {
        //         buzzCount ++
        //         console.log("buzzCount: " + buzzCount)
        //     }
        //     else if (i % 3 === 0 && i % 5 === 0) {
        //         fizzbuzzCount ++
        //         console.log("fizzbuzzCount: " + buzzCount)
        //     }
        //     else console.log(i)
            //array.push(i)
        //}

        //return array
    //}
    //return countObj;
//}
//console.log(fizzbuzzCount(fizzbuzz()))
