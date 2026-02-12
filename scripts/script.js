let displayText = document.querySelector('#display')
let clearBtn = document.querySelector('#clear')

let num1 = 0
let num2 = 0
let operator = ''
clearBtn.addEventListener('click', () => {
  displayText.innerText = '0'
  a = 0
  b = 0
  operator = 0
})
function add (a, b) {
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
