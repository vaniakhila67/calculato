// Task 1: Simple Calculator
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Invalid input: Please enter valid numbers.";
    } else {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
                break;
            default:
                result = "Invalid operator: Please enter one of +, -, *, /.";
        }
    }

    document.getElementById('calculator-output').innerText = `Result: ${result}`;
}

// Task 2: Array Operations
function calculateEvenSum() {
    const input = document.getElementById('array-input').value;
    const numbers = input.split(',').map(Number);
    const evenSum = numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);

    document.getElementById('array-output').innerText = `Sum of even numbers: ${evenSum}`;
}

// Task 3: Object Manipulation
let Person = {
    firstName: "",
    lastName: "",
    age: 0,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    incrementAge() {
        this.age++;
    }
};

function showPersonDetails() {
    Person.firstName = document.getElementById('firstName').value;
    Person.lastName = document.getElementById('lastName').value;
    Person.age = parseInt(document.getElementById('age').value, 10);

    document.getElementById('person-output').innerText = 
        `Full Name: ${Person.getFullName()} \nAge: ${Person.age}`;
}

function incrementAge() {
    Person.incrementAge();
    document.getElementById('person-output').innerText = 
        `Full Name: ${Person.getFullName()} \nAge: ${Person.age}`;
}
