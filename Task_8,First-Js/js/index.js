// Q-1

/*
var num = +window.prompt("enter a number");
if(!isNaN(num)) {
    window.alert(num);
}
else {
    window.alert("This is not a number");
}
*/

// Q-2

/*
var num = +window.prompt("enter a number");
if(!isNaN(num)) {
    if(num % 3 == 0 && num % 4 == 0) {
        window.alert("Yes");
    }
    else {
        window.alert("No");
    }
}
else {
    window.alert("This is not a number");
}
*/

// Q-3

/*
var num1 = +window.prompt("enter a number 1");
var num2 = +window.prompt("enter a number 2");
if(!isNaN(num1) && !isNaN(num2)) {
    if(num1 > num2) {
        window.alert(num1);
    }
    else {
        window.alert(num2);
    }
}
else {
    window.alert("This is not a number");
}
*/

// Q-4

/*
var num = +window.prompt("enter a number");
if(!isNaN(num)) {
    if(num < 0) {
        window.alert("Negative");
    }
    else {
        window.alert("Positive");
    }
}
else {
    window.alert("This is not a number");
}
*/

// Q-5

/*
var num1 = +window.prompt("enter a number 1");
var num2 = +window.prompt("enter a number 2");
var num3 = +window.prompt("enter a number 3");
if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    var max = num1;
    if(num2 > max) {
        max = num2;
    }
    if(num3 > max) {
        max = num3;
    }
    var min = num1;
    if(num2 < min) {
        min = num2;
    }
    if(num3 < min) {
        min = num3;
    }
    window.alert("max element = " + max + "\nmin element = " + min);
}
else {
    window.alert("This is not a number");
}
*/

// Q-6

/*
var num = +window.prompt("enter a number");
if(!isNaN(num)) {
    if(num % 2 == 0) {
        window.alert("Even");
    }
    else {
        window.alert("Odd");
    }
}
else {
    window.alert("This is not a number");
}
*/

// Q-7

/*
var char = window.prompt("Enter a character");
console.log(typeof char);
if(!isNaN(char)) {
    window.alert("This is a number, Enter a character");
}
else {
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        window.alert("Vowel");
    }
    else {
        window.alert("Consonant");
    }
}
*/

// Q-8

/*
var num = +window.prompt("enter a number");
var result = "";
if(!isNaN(num) && num != 0) {
    for(i=1 ; i<=num ; i++) {
        result += i + " ";
    }
    window.alert(result);
}
else if(num == 0) {
    window.alert("Enter a vaild number");
}
else {
    window.alert("This is not a number");
}
*/

// Q-9

/*
var num = +window.prompt("enter a number");
var result = "";
if(!isNaN(num)) {
    for(i=1 ; i<=12 ; i++) {
        result += i * num + " ";
    }
    window.alert(result);
}
else {
    window.alert("This is not a number");
}
*/

// Q-10

/*
var num = +window.prompt("enter a number");
var result = "";
if(!isNaN(num) && num > 1) {
    for(i=1 ; i<=num ; i++) {
        if(i%2 ==0) {
            result += i +" ";
        }
    }
    window.alert(result);
}
else if(num <= 1) {
    window.alert("No Even Numbers");
}
else {
    window.alert("This is not a number");
}
*/

// Q-11

/*
var num1 = +window.prompt("enter a number 1");
var num2 = +window.prompt("enter a number 2");
var result;
if(!isNaN(num1) && !isNaN(num2)) {
    result = num1**num2;
    window.alert(result);
}
else {
    window.alert("This is not a number");
}
*/

// Q-12

/*
var sub1 = +window.prompt("enter a marks of subject 1");
var sub2 = +window.prompt("enter a marks of subject 2");
var sub3 = +window.prompt("enter a marks of subject 3");
var sub4 = +window.prompt("enter a marks of subject 4");
var sub5 = +window.prompt("enter a marks of subject 5");
var total;
var avg;
var per;
if(!isNaN(sub1) && !isNaN(sub2) && !isNaN(sub3) && !isNaN(sub4) && !isNaN(sub5)) {
    total = sub1 + sub2 + sub3 + sub4 + sub5;
    avg = total / 5;
    per = avg;
    window.alert("Total marks = " + total + "\n" + "Average marks = " + avg + "\n" + "Percentage = " +per);
}
else {
    window.alert("This is not a number");
}
*/

// Q-13

/*
var month = +window.prompt("Enter the month number");
if(!isNaN(month)) {
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        window.alert("Days in month: 31");
    }
    else if(month == 4 || month == 6 || month == 9 || month == 11) {
        window.alert("Days in month: 30");
    }
    else if(month == 2) {
        window.alert("Days in month: 28 or 29");
    }
    else {
        window.alert("Enter a valid month number");
    }
}
else {
    window.alert("This is not a number");
}
*/

// Q-14

/*
var sub1 = +window.prompt("enter a marks of subject 1");
var sub2 = +window.prompt("enter a marks of subject 2");
var sub3 = +window.prompt("enter a marks of subject 3");
var sub4 = +window.prompt("enter a marks of subject 4");
var sub5 = +window.prompt("enter a marks of subject 5");
var total;
var per;
var grad;
if(!isNaN(sub1) && !isNaN(sub2) && !isNaN(sub3) && !isNaN(sub4) && !isNaN(sub5)) {
    total = sub1 + sub2 + sub3 + sub4 + sub5;
    per = total / 5;
    if(per>= 90) {
        grad = "A"
    }
    else if(per>=80) {
        grad = "B";
    }
    else if(per>=70) {
        grad = "C";
    }
    else if(per>=60) {
        grad = "D";
    }
    else if(per>=40) {
        grad = "E";
    }
    else if(per<40) {
        grad = "F";
    }
    window.alert("Percentage = " + per + "\n" + "Grad : " + grad);
}
else {
    window.alert("This is not a number");
}
*/

// Q-15

/*
var month = +window.prompt("Enter the month number");
switch(!isNaN(month)) {
    case true:
        switch(month) {
            case 1:
                window.alert("Days in month: 31");
                break;
            case 2:
                window.alert("Days in month: 28 or 29");
                break;
            case 3:
                window.alert("Days in month: 31");
                break;
            case 4:
                window.alert("Days in month: 30");
                break;
            case 5:
                window.alert("Days in month: 31");
                break;
            case 6:
                window.alert("Days in month: 30");
                break;
            case 7:
                window.alert("Days in month: 31");
                break;
            case 8:
                window.alert("Days in month: 31");
                break;
            case 9:
                window.alert("Days in month: 30");
                break;
            case 10:
                window.alert("Days in month: 31");
                break;
            case 11:
                window.alert("Days in month: 30");
                break;
            case 12:
                window.alert("Days in month: 31");
                break;
            default:
                window.alert("Enter a valid month number");
        }
        break;
    case false:
        window.alert("This is not a number");
        break;
}
*/

// Q-16

/*
var char = window.prompt("Enter a character");
switch(!Number(char)) {
    case true:
        switch(char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            case true:
                window.alert("Vowel");
                break;
            case false:
                window.alert("Consonant");
                break;
        }
        break;
    case false:
        window.alert("This is a number, Enter a character");
        break;
}
*/

// Q-17

/*
var num1 = +window.prompt("enter a number 1");
var num2 = +window.prompt("enter a number 2");
switch(!isNaN(num1) && !isNaN(num2)) {
    case true:
        switch(num1 > num2) {
            case true:
                window.alert(num1);
                break;
            case false:
                window.alert(num2);
                break;
        }
        break;
    case false:
        window.alert("This is not a number");
        break;
}
*/

// Q-18

/*
var num = +window.prompt("enter a number");
switch(!isNaN(num)) {
    case true:
        switch(num % 2 == 0) {
            case true:
                window.alert("Even");
                break;
            case false:
                window.alert("Odd");
                break;
        }
        break;
    case false:
        window.alert("This is not a number");
        break;
}
*/

// Q-19

/*
var num = +window.prompt("enter a number");
switch(!isNaN(num)) {
    case true:
        switch(num == 0) {
            case true:
                window.alert("Zero");
                break;
            case false:
                switch(num > 0) {
                    case true:
                        window.alert("Positive");
                        break;
                    case false:
                        window.alert("Negative");
                        break;
                }
                break;
        }
        break;
    case false:
        window.alert("This is not a number");
        break;
}
*/

// Q-20

/*
var num1 = +window.prompt("enter a number 1");
var operation = window.prompt("enter a operation (+ , - , * , / , **)");
var num2 = +window.prompt("enter a number 2");
var result;
switch(!isNaN(num1) && !isNaN(num2)) {
    case true:
        switch(operation) {
            case "+":
                result = num1 + num2;
                window.alert(result);
                break;
            case "-":
                result = num1 - num2;
                window.alert(result);
                break;
            case "*":
                result = num1 * num2;
                window.alert(result);
                break;
            case "/":
                switch(num2 == 0) {
                    case true:
                        window.alert("Cannot divide by zero");
                        break;
                    case false:
                        result = num1 / num2;
                        window.alert(result);
                        break;
                }
                break;
            case "**":
                result = num1 ** num2;
                window.alert(result);
                break;
            default:
                window.alert("Enter a valid Operation");
        }
        break;
    case false:
        window.alert("This is not a number");
        break;
}
*/