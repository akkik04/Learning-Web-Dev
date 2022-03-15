// creating variables for the button and body.
const btn = document.querySelector("button")
const body = document.querySelector("body")

// creating an array of colours to choose from.
const colours = ['blue', 'yellow', 'green', 'pink', 'teal', 'gold']

// pre-defining the original background colour of the body to violet.
body.style.backgroundColor = 'green'

// creating a function to randomly choose a colour.
function colourChange(){

    const ind = parseInt(Math.random() * colours.length)
    body.style.backgroundColor = colours[ind]
}

// creating an event (click) listener to change the body's colour.
btn.addEventListener('click', colourChange)
