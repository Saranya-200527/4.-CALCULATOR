let display = document.getElementById("display");

function appendValue(value) {

    if (display.value === "0") {
        display.value = value;
    }
    else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {

    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    }
    else {
        display.value = "0";
    }
}

function calculate() {

    let expression = display.value;

    // Find the operator
    let operator;

    if (expression.includes("+")) {
        operator = "+";
    }
    else if (expression.includes("-")) {
        operator = "-";
    }
    else if (expression.includes("*")) {
        operator = "*";
    }
    else if (expression.includes("/")) {
        operator = "/";
    }
    else if (expression.includes("%")) {
        operator = "%";
    }

    let numbers = expression.split(operator);

    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);

    let result;

    switch (operator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                result = "Cannot divide";
            }
            else {
                result = num1 / num2;
            }
            break;

        case "%":
            result = num1 % num2;
            break;

        default:
            result = "Invalid";
    }

    display.value = result;
}
