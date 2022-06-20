
var operationSelect = prompt('Please select Operation. Press \n 1 - Add \n 2 - Subtract \n 3 - Divide \n 4 - Multiply \n 5 - Modulus \n');
var num1 = parseInt(prompt('Please enter the first number: '));
var num2 = parseInt(prompt('Please enter the second number: '));


if(operationSelect === '1') {
    add();
}   else if (operationSelect == '2'){
        subtract();
}   else if(operationSelect == '3'){  
        divide(); 
}   else if(operationSelect == '4'){
        multiply();
}   else if(operationSelect == '5'){
        modulus();
}   else {
    alert('Invalid Selection');
}


function add(){
    var ans = num1 + num2;
    alert("The Addition of " + num1 + " and " + num2 +" is \n " + ans);
}

function subtract() {
    var ans = num1 - num2
    alert("The Difference between " + num1 +"  and " + num2 + " is \n " + ans)
}

function divide(){
    var ans = num1 / num2
    alert("The Division of " + num1 +"  by " + num2 + " is \n " + ans)
}

function multiply() {
    var ans = num1 * num2
    alert("The Multiplication of " + num1 +"  and " + num2 + " is \n " + ans)
}

function modulus() {
    var ans = num1 % num2
    alert("The Modulus of " + num1 +"  by " + num2 + " is \n " + ans)
}