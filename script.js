const userInput = document.getElementById("rutan")
const outputen = document.getElementById("svaret")

userInput.addEventListener("keyup", getInput)

function getInput(event) {
const text = event.target.value

const result = statistik(text)
//växla mellan = result och = text
outputen.innerText = result
}
//nedan är olika funktioner som kan användas för att ändra det som blir output
//string.split splittrar string till en array av strings
//Array.join klistrar ihop en array av strings  till en enda lång string

function caesarChiffer(str) {
    
}

function statistik(str) {
    return "Antal tecken: " + str.length + " Antal ord: " + str.split(' ').length
}

function makeLouder (str) {
 return str
    .toUpperCase()
    .split(' ')
    .map(function(word) {
        return word + '!'
    })
    .join(' ')
}
//samma som ovan fast klumpig (Ctrl + K + C för att göra kommentar, Ctrl + K + U tillbaka)
// function louder(str) {
//     const loudText = str.toUpperCase()
//     const loudWords = loudText.split(' ')

//     const foo = loudWords.map(function(word) {
//         return word + '!'
//     })
//     return foo.join(' ')
// }

function doubleSwedish(str){
    const words = str.split(' ')
    console.log(words)

    const duplicateWords = words.map(duplicate)
    return duplicateWords.join(' ')
}

function duplicate (str){
    return str + str
}