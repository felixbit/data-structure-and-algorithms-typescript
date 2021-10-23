/**
 * Simple Big O Analysis
 * Linear time
 */

function anotherFunction(): void {
    console.log('this is another function')
    // [...]
}

function funChanllenge(input: number[]): number {
    let a = 10;                                                                     // O(1)
    a = 50 + 3;                                                                     // O(1)

    for (let i = 0; i < input.length; i++) {
        anotherFunction();                                                          // O(n)
        let someVariable = true;                                                    // O(n)
        a++;                                                                        // O(n)
    }

    return a;                                                                       // O(1)
}

// fill the array from with numbers from 1 'til 10 [1,2,3,4,5,6,7,8,9,10]
const array = new Array(10).fill(null).map((item, index) => ++index);

// function analysis
funChanllenge(array);                                                               // O(3n + 3) = O(n)