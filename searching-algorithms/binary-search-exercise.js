// Write a function called binarySearch which accepts a sorted array
// and a value and returns the index at which the value exists.
// Otherwise, return -1

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle = 0;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (arr[middle] === val) return middle;
        if (arr[middle] < val) left = middle + 1;
        if (arr[middle] > val) right = middle - 1;
    }
    return -1;
}

//console.log(binarySearch([1,2,3,4,5], 6));

function binarySearch_1(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            elem = middle - 1
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch_1([1,2,3,4,5], 5));