// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are duplicates among the arguments passed in. You can solve this
// using the frequency counter pattern or the multiple pointers patterns.

// areThereDuplicates(1,2,3) // false
// areThereDuplicates(1,2,2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

function areThereDuplicates() {
//    if (arguments.length === 0) return false;
//    if (arguments.length === 1) return false;

    let left = 0;
    let right = arguments.length - 1;
    let lookup = {};
    while(left < right) {
        console.log(arguments[left], arguments[right]);
        if (!(arguments[left] in lookup)) {
            lookup[arguments[left]] = 1;
        } else {
            return true;
        }

        if (!(arguments[right] in lookup)) {
            lookup[arguments[right]] = 1;
        } else {
            return true;
        }
        left++;
        right--;
    }
    console.log(lookup);
    return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'd'));

function areThereDuplicates_1() {
    let collection = {};
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }

    for(let key in collection) {
        if (collection[key] > 1) return true;
    }
    return false;
}

//console.log(areThereDuplicates_1('a', 'b', 'c', 'd'));

function areThereDuplicates_2(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}

// console.log(areThereDuplicates_2('a', 'b', 'c', 'd'));

function areThereDuplicates_3() {
    return new Set(arguments).size !== arguments.length;
}

// console.log(areThereDuplicates_3('a', 'b', 'c', 'd'));