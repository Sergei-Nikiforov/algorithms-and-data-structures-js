// Write a function called stringifyNumbers which takes in an object and finds all of the
// values which are numbers and converts them to stings.
// Rcursion would be a great way to solve this!

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

//stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(obj) {
    let newObj = {};

    for (let el in obj) {
        if (typeof obj[el] === 'number') {
            newObj[el] = obj[el] + '';
        } else if (typeof obj[el] === 'object' && !Array.isArray(obj[el])) {
            newObj[el] = stringifyNumbers(obj[el]);
        } else {
            newObj[el] = obj[el];
        }
    }
    
    return newObj;
}

console.log(stringifyNumbers(obj));