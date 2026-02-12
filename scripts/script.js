let displayText = document.querySelector('#display')
let clearBtn = document.querySelector('#clear')

let num1 = 0
let num2 = 0
let operator = ''
clearBtn.addEventListener('click', () => {
  displayText.innerText = ''
  num1 = 0
  num2 = 0
  operator = ''
})
function add (a, b) {
  console.log(a + b)
  return a + b
}
function substract (a, b) {
  console.log(a - b)
  return a - b
}
function multiply (a, b) {
  console.log(a * b)
  return a * b
}
function divide (a, b) {
  console.log(a / b)
  return a / b
}

let equals = document.querySelector('.equals')
equals.addEventListener('click', () => {
  if (operator == '÷') {
    displayText.innerText = divide(num1, num2)
  } else if (operator === '✕') {
    displayText.innerText = multiply(num1, num2)
  } else if (operator === '+') {
    displayText.innerText = add(num1, num2)
  } else if (operator === '-') {
    displayText.innerText = substract(num1, num2)
  }
})

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
    console.log(num1, num2, operator)
  })
})
/* get operator */
let operators = document.querySelectorAll('.operator')
operators.forEach(element => {
  element.addEventListener('click', () => {
    if (num1 != 0) {
      if (operator === '') {
        displayText.innerText = element.innerText
        operator = element.innerText
        console.log(num1, num2, operator)
      }
    }
    displayText.innerText = ''
  })
})
