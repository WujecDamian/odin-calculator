let displayText = document.querySelector('#display')
let clearBtn = document.querySelector('#clear')

let num1 = 0
let num2 = 0
let operator = ''
clearBtn.addEventListener('click', () => {
  displayText.innerText = ''
  a = 0
  b = 0
  operator = 0
})
function add (a, b) {
  console.log(a + b)
  return a + b
}
function substract (a, b) {
  return a - b
}
function multiply (a, b) {
  return a * b
}
function divide (a, b) {
  return a / b
}

function operate (a, b, operator) {}

/* number variable  */
let numbers = document.querySelectorAll('.number')
numbers.forEach(element => {
  element.addEventListener('click', () => {
    if (operator === '') {
      displayText.innerText += element.innerText
      num1 = parseInt(displayText.innerText)
    } else {
      displayText.innerText += element.innerText

      num2 = parseInt(displayText.innerText)
    }
  })
})
/* get operator */
let operators = document.querySelectorAll('.operator')
operators.forEach(element => {
  element.addEventListener('click', () => {
    if (operator === '') {
      displayText.innerText += element.innerText
      operator = element.innerText
    }
  })
})
