// Start looping from the ends of the array towards the beginning with a variable called i
// Start an inner loop with a variable called j from the beginning  until i-1
// If arr[j] > arr[j+1], swap those two values.
// Return the sorted array

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

const swap_1 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSort(arr) {
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if(noSwaps) break; 
        // Если небыло свопа в этой терации, то его больше не будет.
        // Значит массив отсортирован. Поэтому выходим.
        console.log("ONE PASS COMPLEATE!");
    }
    return arr;
}

// console.log(bubbleSort([37,45,29,8]));
console.log(bubbleSort([8,1,2,3,4,5,6,7]));