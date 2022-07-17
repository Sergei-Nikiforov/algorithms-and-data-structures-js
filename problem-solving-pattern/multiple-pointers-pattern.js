// Write a function called sumZero which accepts a sorted array of integers. The function
// should find the first pair where the sum is 0. Return an array that includes both
// values that sum to zero or undefined if a pair does not exist.

function sumZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}

//console.log(sumZero([-3,-2,-1,0,1,2,3]));
// ************************************************************************

function sumZero_1(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
//console.log(sumZero_1([-3,-2,-1,0,1,2,3]));
// ************************************************************************
// Implement a function called countUniqueValues, which accepts a sorted array, and counts
// the unique values in the array. There can be negative numbers in the array,
// but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]); // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,12,13]); // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

function countUniqueValues(arr) {
    let left = 0;
    let right = arr.length - 1;

    const lookup = {};
    let count = 0;
    while(left < right) {
        if (!(arr[left] in lookup)) {
            count++;
            lookup[arr[left]] = arr[left];
        }
        if (!(arr[right] in lookup)) {
            count++;
            lookup[arr[right]] = arr[right];
        }
        left++;
        right--;
    }
    console.log(lookup);
    return count;
}

// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,12,13]));

function countUniqueValues_1(arr) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return 1;

    let left = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[left] !== arr[i]) {
            left++;
            arr[left] = arr[i];
        }
    }
    return ++left;
}

console.log(countUniqueValues_1([1,2,3,4,4,4,7,7,12,12,12,13]));