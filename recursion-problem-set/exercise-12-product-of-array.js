// Write a function called productOfArray which takes in an array of numbers 
// and returns the product of them all.

function productOfArray(arr) {
    let product = 1;

    function helper(arr) {
        if (arr.length === 0) return;

        product *= arr[0];
        return helper(arr.slice(1));
    }
    helper(arr);
    return product;
}

//console.log(productOfArray([1,2,3]));

function productOfArray_1(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray_1(arr.slice(1));
}

console.log(productOfArray_1([1,2,3]));