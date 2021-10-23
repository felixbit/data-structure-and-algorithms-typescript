/**
 * Simple Big O Analysis
 * Quadratic time
 */

function addPairsFromArray(numArray: number[]): void {
    numArray.forEach(numA => {                                                          // O(n)
        numArray.forEach(numB => {                                                      // O(n)
            console.log(`Adding pairs ${numA} + ${numB} = ${numA + numB}`);
        })
    })
};


const numberArray = [1, 2, 3];

addPairsFromArray(numberArray);                                                         // O(n*n) = O(n^2)