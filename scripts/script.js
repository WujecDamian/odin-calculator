let displayText = document.querySelector('#display')
let displayTextSmall = document.querySelector('#display__small')

let clearBtn = document.querySelector('#clear')

let num1 = 0
let num2 = 0
let operator = ''
clearBtn.addEventListener('click', () => {
  clearBtn.innerText = 'AC'
  displayTextSmall.innerText = ''

  displayText.innerText = ''
  num1 = 0
  num2 = 0
  operator = ''
})
function add (a, b) {
  console.log(a + b)
  num1 = a + b
  if ((a + b).toFixed(3) <= 99999999) {
    if (num1.toString().includes('.') || num2.toString().includes('.')) {
      return (a + b).toFixed(3)
    } else {
      return a + b
    }
  } else {
    return (a + b).toPrecision(4)
  }
}
function substract (a, b) {
  console.log(a - b)
  num1 = a - b
  if ((a - b).toFixed(3) <= 99999999) {
    if (num1.toString().includes('.') || num2.toString().includes('.')) {
      return (a - b).toFixed(3)
    } else {
      return a - b
    }
  } else {
    return (a - b).toPrecision(4)
  }
}
function multiply (a, b) {
  console.log(a * b)
  num1 = a * b
  if ((a * b).toFixed(3) <= 99999999) {
    if (num1.toString().includes('.') || num2.toString().includes('.')) {
      return (a * b).toFixed(3)
    } else {
      return a * b
    }
  } else {
    return (a * b).toPrecision(4)
  }
}
function divide (a, b) {
  if (b > 0) {
    console.log(a / b)
    num1 = a / b
    if ((a / b).toFixed(3) <= 99999999) {
      if (num1.toString().includes('.') || num2.toString().includes('.')) {
        return (a / b).toFixed(3)
      } else {
        return a / b
      }
    } else {
      return (a / b).toPrecision(4)
    }
  } else {
    console.log('Divide by 0? Really?')
    return 'Really?🤦‍♂️'
  }
}

function operate () {
  if (num1 != 0 && num2 != 0 && operator != '') {
    if (operator == '÷') {
      displayTextSmall.innerText = `${num1} ${operator} ${num2} =`
      displayText.innerText = divide(num1, num2)
    } else if (operator === '✕') {
      displayTextSmall.innerText = `${num1} ${operator} ${num2} =`
      displayText.innerText = multiply(num1, num2)
    } else if (operator === '+') {
      displayTextSmall.innerText = `${num1} ${operator} ${num2} =`
      displayText.innerText = add(num1, num2)
    } else if (operator === '-') {
      displayTextSmall.innerText = `${num1} ${operator} ${num2} =`
      displayText.innerText = substract(num1, num2)
    }
  }
}
let equals = document.querySelector('.equals')
equals.addEventListener('click', operate)

/* number variable  */
let numbers = document.querySelectorAll('.number')
numbers.forEach(element => {
  element.addEventListener('click', () => {
    if (displayText.innerText.includes('.')) {
      numbers[10].innerText = ''
    } else {
      numbers[10].innerText = '.'
    }
    if (operator === '') {
      if (num1 <= 9999999) {
        displayText.innerText += element.innerText
        num1 = parseFloat(displayText.innerText)
      }
    } else {
      if (num2 === 0) {
        displayText.innerText += element.innerText
        num2 = parseFloat(displayText.innerText)
      } else {
        if (num2 <= 9999999) {
          displayText.innerText += element.innerText
          num2 = parseFloat(displayText.innerText)
        }
      }
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
        displayTextSmall.innerText = `${num1} ${operator}`

        console.log(num1, num2, operator)
      }
      clearBtn.innerText = 'C'
    }
    if (num2 != 0) {
      operate()
      displayText.innerText = element.innerText
      operator = element.innerText
      displayTextSmall.innerText = `${num1} ${operator}`
    }
    displayText.innerText = ''
  })
})
