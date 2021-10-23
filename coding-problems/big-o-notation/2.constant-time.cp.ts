/**
 * Simple Big O Analysis
 * Constant time
 */

function findFirstAndLastElement(array: number[]): void {
    console.log(array[0]);                                                                      // O(1)
    console.log(array[array.length-1])                                                          // O(1)
};

function printElementsFromArrays(firstArray: number[], secondArray: number[]): void {
    firstArray.forEach(number => console.log(number));                                          // O (nA)
    secondArray.forEach(number => console.log(number))                                          // O (nB)
}

function manipulateArray(array: number[]): void {
    array.forEach(oldValue => console.log('old value: ' + oldValue));                           // O(n)
    const newArray = array.map(value => value * 2);                                             // O(n)
    newArray.forEach(newValue => console.log('old value: ' + newValue));                        // O(n)
}
let firstSet = [1, 2, 3, 4, 5];
let secondSet = [6, 7, 8, 9, 10];

findFirstAndLastElement(firstSet)                                                               // O(2) = O(1)
printElementsFromArrays(firstSet, secondSet)                                                    // O(nA + nB)
manipulateArray(secondSet)                                                                      // O(3n) = O(n)