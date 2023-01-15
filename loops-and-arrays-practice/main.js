var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let count = 0
    for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") count += 1
    }
    console.log(count)


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
    ]

    for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, don't let him in.")
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, don't let her in.")
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough, let him in.")
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough, let her in.")
    }
