const readline = require("readline-sync");

let playerName = readline.question("Enter your name: ");
    console.log("Welcome " + playerName + "... You wake to find yourself laying on the floor of an empty room. There's a door in front of you and what appears to be a hole in the wall to your right")

const selections = ["Try the door", "Reach into the hole", "Search the right corner", "Search the left corner"]

for (let i = 0; i < Infinity; i++) {
    let count = 0;
    index = readline.keyInSelect(selections, "What will you do?")
    if (selections[index] === "Try the door") {
        console.log("The door is locked")
    } else if (selections[index] === "Reach into the hole") {
        console.log("You have died :(")
    } else if (selections[index] === "Search the right corner") {
        console.log("The corner appears to be empty")
    } else if (selections[index] === "Search the left corner") {
        //console.log("You found a key!")
        //count++
        const choice = readline.keyInYN("You found a key. Do you want to try the door? ")
        if(choice === true){
            console.log("You unlocked the door! You have escaped! You win! ")
        }else{
            console.log("You didn't unlock the door. You have died! ")
        }
    }
    //if (count < 1 || count === 1 && selections[index] === "Try the door") console.log("You unlocked the door! You have escaped! You win!")

}
