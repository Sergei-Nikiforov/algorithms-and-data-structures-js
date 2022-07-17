// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords(arr) {
    let newArr = [];

    if (arr.length === 0) return [];

    newArr.push(arr[0].toUpperCase());
    return newArr.concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));