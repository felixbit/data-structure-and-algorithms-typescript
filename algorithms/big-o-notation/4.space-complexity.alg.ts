/**
 * Simple Big O Analysis
 * Space complexity
 */

const printEvenNumbers = (numberQuantity: number) => {
    for (let index = 1; index <= numberQuantity; index++) {                         // O(1)
        console.log(`${index * 2}`);
    }
}

const populateArrayWithEvenNumbers = (numberQuantity: number): number[] => {
    let array = [];                                                                 // O(1)

    for (let index = 1; index <= numberQuantity; index++) {                         // O(1)
        array[index-1] = index * 2;                                                 // O(n)
    }

    return array;
}

printEvenNumbers(5);                                                                // O(1)
console.log(populateArrayWithEvenNumbers(5));                                       // O(n + 2) = O(n)