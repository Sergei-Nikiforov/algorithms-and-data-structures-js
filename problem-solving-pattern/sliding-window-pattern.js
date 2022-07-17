// Write a function called maxSubarraySum which accepts an array of integers
// and a number called n. The function should calculate the maximum sum of n 
// consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5], 2); // 10
// maxSubarraySum([1,2,5,2,8,1,5], 4); // 17
// maxSubarraySum([4,2,1,6], 1); // 6
// maxSubarraySum([4,2,1,6,2], 4); // 13
// maxSubarraySum([], 2); // null

function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }

    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        console.log(arr[i]);
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));
function maxSubarraySum_1(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;

    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum_1([1,2,5,2,8,1,5], 4));