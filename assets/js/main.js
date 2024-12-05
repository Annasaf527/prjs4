'use strict'

// задание 1

function printEvenNumbers() {
    let a = parseInt(prompt("Введите первое число (a):"));
    let b = parseInt(prompt("Введите второе число (b):"));

    if (a > b) {
        alert("Пожалуйста, убедитесь, что a меньше b.");
        return;
    }

    let evenNumbers = "";

    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) { 
            evenNumbers += i + " "; 
        }
    }

    alert("Четные числа от " + a + " до " + b + ": " + evenNumbers.trim());
}

printEvenNumbers();

// задание 2 

let i = 0; 

while (i < 3) {
    alert(`number ${i}!`); 
    i++; 
}

// задание 3

let number; 
while (true) { 
    number = prompt("Введите число, большее 10:"); 
    if (number === null) {
        alert("Вы отменили ввод.");
        break; 
    }
    number = Number(number);
    if (number > 10) {
        alert(`Вы ввели число: ${number}`);
        break;
    } else {
        alert("Число должно быть больше 10.");
    }
}

// задание 4

function min(a, b) {
    return a < b ? a : b;
}

let a = parseFloat(prompt("Введите первое число (a):"));
let b = parseFloat(prompt("Введите второе число (b):"));

let result = min(a, b);
alert("Меньшее число: " + result);
