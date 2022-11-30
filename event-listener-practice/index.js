let square = document.getElementById("morphing-square")

square.addEventListener("mouseover", function () {
    square.style.backgroundColor = "blue"
})
square.addEventListener("mouseout", function () {
    square.style.backgroundColor = "aqua"
})
square.addEventListener("mousedown", function () {
    square.style.backgroundColor = "red"
})
square.addEventListener("mouseup", function () {
    square.style.backgroundColor = "yellow"
})
square.addEventListener("dblclick", function () {
    square.style.backgroundColor = "green"
})

//let body = document.getElementById("body")
window.addEventListener("scroll", function () {
    square.style.backgroundColor = "orange"
})
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 66) square.style.backgroundColor = "blue"
    if (event.keyCode === 82) square.style.backgroundColor = "red"
    if (event.keyCode === 89) square.style.backgroundColor = "yellow"
    if (event.keyCode === 71) square.style.backgroundColor = "green"
    if (event.keyCode === 79) square.style.backgroundColor = "orange"
})


// google: find the key code for a keydown or keyup event in Java script .. Java script key code list
