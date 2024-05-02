console.log('Hello world')

// counter functions
let count = 0

const increase = () => {
    count++
    counter.innerText = count
}

const decrease = () => {
    count--
    counter.innerText = count
}

const reset = () => {
    count = 0
    counter.innerHTML = `<mark>${count}</mark>`
}

// counter button document.querySelector variables
const increaseBtn = document.querySelector('#increaseBtn')
const decreaseBtn = document.querySelector('#decreaseBtn')
const resetBtn = document.querySelector('#resetBtn')

// counter button event listeners
increaseBtn.addEventListener('click', increase)
decreaseBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)

// counter display document.querySelector variable
const counter = document.querySelector('#counter')

// theme function
const selectTheme = (theme) => {
    document.querySelector('body').className = theme
    document.querySelector('main').className = theme

    const buttons = document.querySelectorAll('button')

    for (let button of buttons) {
        button.className = theme
    }
}

// theme button variables + event listeners
const facebookBtn = document.querySelector('#facebook')
const devmountainBtn = document.querySelector('#devmountain')
const twitterBtn = document.querySelector('#twitter')
const defaultBtn = document.querySelector('#default')

facebookBtn.addEventListener('click', () => selectTheme('facebook'))
devmountainBtn.addEventListener('click', () => selectTheme('devmountain'))
twitterBtn.addEventListener('click', () => selectTheme('twitter'))
defaultBtn.addEventListener('click', () => selectTheme('default'))