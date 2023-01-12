const myHeader = document.getElementById("header");
const newHeader = document.createElement("h1");
newHeader.textContent = "Javascript Made This!!";

const newHeader2 = document.createElement("span");
newHeader2.textContent = "Sarah";
newHeader2.style.color = "pink";

const newHeader3 = document.createElement("span");
newHeader3.textContent = " wrote the Javascript";

myHeader.append(newHeader);
myHeader.append(newHeader2);
myHeader.append(newHeader3);

let message = document.getElementsByClassName("message");

message[0].textContent = "I require oranges";
message[1].textContent = "They're headed your way babe!";
message[2].textContent = "Send oranges please";
message[3].textContent = "I hope you and oranges have a great day!";

let clearButton = document.getElementById("clear-button");
let clearMessages = document.querySelector(".messages");

clearButton.addEventListener("click", function () {
    clearMessages.textContent = ""
});

//let dropDown = document.getElementById("theme-drop-down");
//let messages = getElementsByClassName("message");
//let styledMessageLeft = document.getElementsByClassName("message left");
//let styledMessageRight = document.getElementsByClassName("message right");
//dropDown.addEventListener("change", function () {
//    if (value === "theme-two") {
//        message[0].style.backgroundColor = "black";
//        message[2].style.backgroundColor = "black";
//        message[1].style.backgroundColor = "red";
//        message[3].style.backgroundColor = "red";
        //styledMessageLeft.style.backgroundColor = "brown";
        //styledMessageRight.style.backgroundColor = "blue";
//    } else if (value === "theme-one") {
        //styledMessageLeft.style.backgroundColor = "black";
        //styledMessageRight.style.backgroundColor = "red";
//    }
//});
