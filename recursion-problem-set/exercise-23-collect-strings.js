// Write a function called collectStrings which accepts an object and
// returns an array of all the values in the object that have a typeof string
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

// collectStrings(obj) // ["foo", "bar", "baz"])

function collectStrings(obj) {
    let newArr = [];

    for (let el in obj) {
        if (typeof obj[el] === 'string') newArr.push(obj[el]);
        if (typeof obj[el] === 'object') {
            newArr = newArr.concat(collectStrings(obj[el]));
        }
    }
    return newArr;
}

console.log(collectStrings(obj));