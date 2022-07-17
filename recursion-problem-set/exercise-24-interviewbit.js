// 37. Implement a function that returns an updated array with r right rotations on an array of integers a .
// Example:
// Given the following array: [2,3,4,5,7]
// Perform 3 right rotations:
// First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]
//return [4,5,7,2,3]

function arrRotation(arr, r) {
    if (r === 0) return arr;
    
    let temp = arr.pop(1);
    arr = [temp, ...arr];
    
    return arrRotation(arr, r - 1);
}

console.log(arrRotation([2, 3, 4, 5, 7], 3));