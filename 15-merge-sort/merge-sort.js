//@ts-check

//Create an empty array, take a look at the smallest values in each input array
//While there are still values we haven't looked at...
    //If the value in the first array is smaller than the value in the second array, 
    //push the value in the first array into our results and move on to the next value in the first array
    //If the value in the first array is larger than the value in the second array, 
    //push the value in the second array into our results and move on to the next value in the second array
    //Once we exhaust one array, push in all remaining values from the other array

// In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, 
// and consists of all of the elements in the two input arrays
// This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let results = [];
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    if (!arr1[i] && arr2[j]) results.push(...arr2.slice(j));
    if (!arr2[j] && arr1[i]) results.push(...arr1.slice(i));
    return results;
}

//console.log(merge([1,10,50], [2,14,99,100]));

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);
}

console.log(mergeSort([10,24,2,5,0,76,73]));