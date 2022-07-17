function getDigit(num, i) { // returns the number in specifit digit
    return Math.floor(Math.abs(num) / (10**i)) % 10;
}

//console.log(getDigit(12345, 2));

function digitCount(num) {  // returns the number of digits in num
    if (num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    // Given an array of numbers, 
    // returns the number of digits in the largest numbers in the list
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}

//console.log(mostDigits([23,567,89,12224332,90]));

//  Define a function that accepts list of numbers
//  Figure out how many digits the largest numbers has
//  Loop from k=0 up to this largest number of digit
//  For each iteration of the loop:
    // Create buckets for each digit (0 to 9)
    // Place each number in the corresponding bucket based on its kth digit
//  Replace our existing array with values in our buckets, 
//  starting with 0 and going up to 9
//  Return list at the end.

function radixSort(arr) {
    let maxDigitCount = mostDigits(arr);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBucketsP = Array.from({length: 10}, () => []); // positive numbers
        let digitBucketsN = Array.from({length: 10}, () => []); // negative numbers
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            if (arr[i] >= 0) digitBucketsP[digit].push(arr[i]);
//            if (arr[i] < 0) digitBucketsN[digit].push(arr[i]);
            if (arr[i] < 0) {
                if(digit === 0) digitBucketsN[9].push(arr[i]);
                if(digit !== 0) digitBucketsN[9-digit].push(arr[i]);
            }
        }

//        arr = [].concat(...digitBucketsN.reverse(), ...digitBucketsP);
        arr = [].concat(...digitBucketsN, ...digitBucketsP);

    }
    return arr;
}

console.log(radixSort([23,567,1234567,89,90,-111, -23, -1, -22222,0, -9999]));