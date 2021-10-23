# data-structure-and-algorithms-typescript/big-o-notation

# Big O Notation


> [**Big O notation | Asymptotic notation]** is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In *computer science*, big O notation is used to **classify algorithms** according to **how their run time or space requirements** **grow as the input size grows**.
> 

## Order of common functions


| Notation         | Name        | Example                                                                      |
|------------------|-------------|------------------------------------------------------------------------------|
| O(1)           | Constant    | *No loops*                                                                   |
| O(log\,n)      | Logarithmic | *Usually searching algorithms have log n if they are sorted (Binary Search)* |
| O(n)           | Linear      | *Linear for loops, while loops through n items*                              |
| O(n\,\,log\,n) | Log Linear  | *Usually sorting operations*                                                 |
| O(n^2)         | Quadratic   | *Two nested loops*                                                           |
| O(2^n)         | Exponential | *Recursive algorithms that solves a problem of size N*                       |
| O(n!)          | Factorial   | *Add a loop for every element.*                                              |

→ *Iterating through half a collection is still O(n).*

## Rule book


1. **Always analyse the worst case.**
2. **Remove constants.**
3. **Different inputs should have different variables.**
    1. O(nA * nB) or O(nA + nB).
4. **Drop non-dominant terms.**

## Space x Time complexity


### **What makes a Good Code?**

- Readable
- Scalable
    - Speed (time complexity)
    - Memory (space complexity)

### **What causes time complexity in a function?**

- Operations (`+`, `-`, `*`, `/`)
- Comparisons (`>`, `<`, `==`)
- Looping (`for`, `while`)
- Outside function calls (`function()`)

### **What causes space complexity in a function?**

→ **heap**: variable → **stack**: function calls

- Variables
- Data Structures
- Function Calls
- Allocations

## To run examples in this codebook

```bash
npm ts-node file-name.ts
```

*It should be noted that these basic examples are focused on the theory of Big O Notation and not the execution of the code itself.* 

Have fun!!! 😄
