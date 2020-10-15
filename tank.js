function moveRight() {
    let x = parseInt(document.getElementById("tank").style.left)
    console.log(x)
    document.getElementById("tank").style.left = x + 19 + "px"
}

function moveLeft() {
    let x = parseInt(document.getElementById("tank").style.left)
    console.log(x)
    document.getElementById("tank").style.left = x - 19 + "px"
}

function moveDown() {
    let x = parseInt(document.getElementById("tank").style.top)
    console.log(x)
    document.getElementById("tank").style.top = x + 19 + "px"
}

function moveUp() {
    let x = parseInt(document.getElementById("tank").style.top)
    console.log(x)
    document.getElementById("tank").style.top = x - 19 + "px"
}