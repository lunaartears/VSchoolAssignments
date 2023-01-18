var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

    console.log(fruit.shift());
    console.log(vegetables.pop());
    console.log(fruit.indexOf("orange"));

    console.log(fruit.push(fruit.indexOf("orange")));
    console.log(fruit);

    console.log(vegetables.length);

    console.log(vegetables.push(vegetables.length));
    console.log(vegetables);

    let food = fruit.concat(vegetables);
    console.log(food);

    food.splice(4, 2);
    console.log(food);

    food.reverse();
    console.log(food);

    food.join();
    console.log(food);
