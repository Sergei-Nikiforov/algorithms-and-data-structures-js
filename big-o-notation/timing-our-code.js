// calculates the sum of all numbers from 1 up to (and including) some number n.
function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
//console.log(addUpTo(100));

// **********************************************************************************
function addUpTo_1(n) {
    return n * (n + 1) / 2;
}
//console.log(addUpTo_1(100));
// **********************************************************************************

let t1 = performance.now();
addUpTo_1(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);