//It will help to accept three arguments: an array, a start index, 
//and an end index (these can default to 0 and the array length minus 1, respectively)
//Grab the pivot from the start of the array 
//Store the current pivot index in a variable (this will keep track of where the pivot should end up)
//Loop through the array from the start until the end
    //If the pivot is greater than the current element, 
    //increment the pivot index variable and then swap the current element with the element at the pivot index
//Swap the starting element (i.e. the pivot) with the pivot index
//Return the pivot index

//Call the pivot helper on the array
//When the helper returns to you the updated pivot index, recursively call the pivot helper 
//on the subarray to the left of that index, and the subarray to the right of that index
//Your base case occurs when you consider a subarray with less than 2 elements

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function pivot(arr, start = 0, end = arr.length - 1) {
//    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= arr.length; i++) {
        if (arr[start] > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
            console.log(arr);
        }
    }
    swap(arr, start, swapIdx);
    console.log(arr);
    return swapIdx;
}

//let arr = [26,23,27,44,17,47,39,42,43,1];
let arr = [4,8,2,1,5,7,6,3];

//console.log(pivot(arr));

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort(arr));