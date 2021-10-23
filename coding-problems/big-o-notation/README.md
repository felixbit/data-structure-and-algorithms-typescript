# data-structure-and-algorithms-typescript/big-o-notation

# Big O Notation

---

> [**Big O notation | Asymptotic notation]** is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In *computer science*, big O notation is used to **classify algorithms** according to **how their run time or space requirements** **grow as the input size grows**.
> 

## Order of common functions

---

Notation

- $O(1)$
- $O(log\,n)$

- $O(n)$

- $O(n\,\,log\,n)$

- $O(n^2)$
- $O(2^n)$

- $O(n!)$

Name

- Constant
- Logarithmic

- Linear

- Log Linear

- Quadratic
- Exponential

- Factorial

Example

- No loops
- Usually searching algorithms have log n if they are sorted (Binary Search)
- Linear for loops, while loops through n items
- Usually sorting operations
- Two nested loops
- Recursive algorithms that solves a problem of size N
- Add a loop for every element.

→ *Iterating through half a collection is still $O(n)$.*

## Rule book

---

1. **Always analyse the worst case.**
2. **Remove constants.**
3. **Different inputs should have different variables.**
    1. $O(nA\,\cdot\,nB)$ or $O(nA +nB)$.
4. **Drop non-dominant terms.**

## Space x Time complexity

---

**What makes a Good Code?**
    - Readable
    - Scalable
        - Speed (time complexity)
        - Memory (space complexity)

### What causes time complexity in a function?

- Operations (`+`, `-`, `*`, `/`)
- Comparisons (`>`, `<`, `==`)
- Looping (`for`, `while`)
- Outside function calls (`function()`)

### What causes space complexity in a function?

→ **heap**: variable → **stack**: function calls

- Variables
- Data Structures
- Function Calls
- Allocations