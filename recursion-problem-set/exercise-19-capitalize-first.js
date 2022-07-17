// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(arr) {
    let newArr = [];

    if (!arr.length) return [];

    newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
//    newArr = [...newArr, ...capitalizeFirst(arr.slice(1))];

    return newArr;
}

 console.log(capitalizeFirst(['car','taco','banana']));

function capitalizeWords_1(array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].slice(1)];
    }

    let res = capitalizeWords_1(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0][0].toUpperCase() + array.slice(array.length-1)[0].slice(1));
    return res;
}

//console.log(capitalizeWords_1(['car','taco','banana']));