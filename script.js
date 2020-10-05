const userInput = document.getElementById("rutan")
const outputen = document.getElementById("svaret")

userInput.addEventListener("keyup", getInput)

function getInput(event) {
const text = event.target.value

const result = manipulation(text)

outputen.innerText = result
}

function manipulation(str) {
    return str + str
}