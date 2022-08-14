'use strict';

/*
1. Написати функцію, яка приймає в якості аргумента висоту прямокутника і його ширину, повертає площу прямокутника.
*/
function rectangleArea (a, b) {
    return a * b;
}
let resultRectangleArea = rectangleArea (5, 4);
console.log(resultRectangleArea);

/*
2. Написати функцію, яка приймає в якості аргумента діаметр кола і повертає довжину кола (длина окружности по диаметру)
*/
function circleLength (d) {
    return d * 3.14;
}
let resultCircleLength = circleLength (10);
console.log(resultCircleLength);

/*
3. Написати функцію, яка приймає в якості аргумента висоту циліндра та діаметр основи і повертає об'єм циліндра.
*/ 
function cylinderVolume (d, h) {
    const r = d / 2;
    return 3.14 * (r * r) * h;
}
let resultCylinderVolume = cylinderVolume (4, 10);
console.log(resultCylinderVolume);

/*
4. Написати функцію, яка приймає два числа (діапазон) і виводити на консоль всі числа з цього діапазону, які діляться на 5.
*/
function diapazonTwoNumber (a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 5 === 0) {
            console.log(i);
        } 
    }
    return;
}
let rezultDiapazonTwoNumber = diapazonTwoNumber (10, 100);

/*
6. Реалізовати гру FizzBuzz для 100 чисел.
*/
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

/*
Задачка із зірочкою (НЕОБОВʼЯЗКОВА)
Написати функцію, яка приймає коефіцієнти квадратного рівняння і вирішує рівняння, і виводить на консоль можливі значення Х.
*/
function quadraticEguation (a, b, c) {
    if(a === 0) {
        return console.log('"а" не должно быть равным 0!');
    }
    let D = b * b - 4 * a * c;
    let x1,
        x2;
    if(D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return console.log(`x1 = ${x1}, x2 = ${x2}`);
    } else if(D === 0) {
        x1 = -b / (2 * a);
        return console.log(`x = ${x1}`);
    } else if(D < 0) {
        return console.log('Корней нет');
    }
}
quadraticEguation (2, 10, 8);