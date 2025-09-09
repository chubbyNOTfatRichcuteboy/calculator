function add(a, b) {
    return(a+b);
}
function subtract(a, b) {
    return(a-b);
}
function multiply(a, b) {
    return(a*b);
}
function divide(a, b) {
    return(a/b);
}

let num1 = "";
let num2 = "";
let operator = "";

let tempnum = "";

const displaynumbers = document.querySelector('#displaynumbers');

function operate(num1 = 0, num2 = 0, operator = "none") {
    if (operator === "+") {
        answer = add(num1, num2);
        return(answer);
    } else if (operator === "-") {
        answer = subtract(num1, num2);
        return(answer);
    } else if (operator === "X") {
        answer = multiply(num1, num2);
        return(answer);
    } else if (operator === "/") {
        answer = divide(num1, num2);
        return(answer);
    } else {
        return(tempnum)
    }
}

numbers = document.querySelectorAll(".num");
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        tempnum = tempnum + button.textContent;
        displaynumbers.textContent=tempnum;
    })
})

decimals = document.querySelector('#decimal');
decimals.addEventListener('click', () => {
    if (!tempnum.includes(".")) {
        tempnum = tempnum + ".";
        displaynumbers.textContent = tempnum;
    }
})

opps = document.querySelectorAll(".operator");
opps.forEach((opp) => {
    opp.addEventListener('click', () => {
        if(tempnum != "") {
            num1 = parseFloat(tempnum);
            tempnum = "";
            operator = opp.textContent;
        }
    })
})

equalsButton = document.querySelector("#equals");
equalsButton.addEventListener('click', () => {
    num2 = parseFloat(tempnum);
    if (num2 === 0 && operator == "/") {
        displaynumbers.textContent="You can't divide by 0"
    } else {
        answer = Math.round(operate(num1, num2, operator)*1000)/1000;
        tempnum = answer.toString();
        operator = "";
        displaynumbers.textContent=tempnum;
    }
})

deleteButton = document.querySelector("#delete");
deleteButton.addEventListener('click', () => {
    tempnum = tempnum.slice(0, -1);
    displaynumbers.textContent=tempnum;
})
clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    tempnum = "";
    num1 = "";
    operator = "";
    displaynumbers.textContent=tempnum;
})
flipper = document.querySelector('#flipper');
flipper.addEventListener('click', () => {
    if(tempnum.includes("-")) {
        tempnum = tempnum.slice(1);
    } else {
        tempnum = "-" + tempnum;
    }
    displaynumbers.textContent=tempnum;
})
pi = document.querySelector('#pi');
pi.addEventListener('click', () => {
    tempnum = Math.PI.toFixed(5);
    displaynumbers.textContent=tempnum;
})