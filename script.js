function getInput() {
    let userInput = document.getElementById("rutan").value
    document.getElementById("svaret").innerHTML = userInput
}

document.getElementById("knappen").onclick = getInput