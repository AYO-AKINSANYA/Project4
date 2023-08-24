// TASK

// 1. Write a function that takes two numbers as inputs and returns the sum of all the even numbers between them. Use a loop and conditional statements to accomplish this task.

// 2. Write a program that prints the first 100 Fibonacci numbers. Use a loop and conditional statements to accomplish this task.

// 3. Write a program that takes an array of integers and returns the largest number in the array. Use a loop and conditional statements to accomplish this task.

// 4. Write a program that takes an array of integers and returns the sum of all the even numbers in the array. Use a loop and conditional statements to accomplish this task.

// 5. Write a program that takes an array of integers and returns a new array with only the even numbers. Use a loop and conditional statements to accomplish this task.







// Question 1
function SumOfEvenNumber(num1, num2) {
    let sum = 0;
    for (let num = num1; num <= num2; num++) {
        if (num % 2 === 0) {
            sum += num;
        }

    }
    return sum
}
console.log(SumOfEvenNumber(1, 30))



// Question 2
function printFibonacciNumbers() {
    let num1 = 0;
    let num2 = 1;

    console.log(num1);
    for (let i = 0; i < 99; i++) {
        let nextNum = num1 + num2;
        console.log(nextNum);

        num1 = num2
        num2 = nextNum
    }
}
console.log(printFibonacciNumbers())



// Question 3
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
function findLargestNumber(array) {
    let largestNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largestNumber) {
            largestNumber = array[i];
        }
    }
    return largestNumber
}

console.log(findLargestNumber(numbers));



// Question 4
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function SumOfEven(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum
}

console.log(SumOfEven(number))



// Question 5
const num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
function EvenNum(array) {
    let evenNum = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNum.push(array[i]);
        }
    }
    return evenNum;
}

console.log(EvenNum(num))
