// Write a function whick tackes in a string and returns counts of each character in the string.

// charCount("aaaa"); // {a:4}
// charCount("hello"); // {h:1, e:1, l:2, o:1}
// "my phone number is 182763"
// "Hello hi"
// charCount("");

//function charCount(str) {
    // do something
    // return and object with keys that are lowercase alphanumeric characters in the string; 
    // values should be the counts for those characters
//}

// function charCount(str) {
//     // make object to return at end
//     var result = {};
//     // loop over string for each character...
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         // if the char is a number/letter AND a key in object, add one to count
//         if (/[a-z0-9]/.test(char)) {
//             if (result[char] > 0) {
//                 result[char] ++;
//             } 
//             // if the char is a number/letter AND not in object, add it to object and set value to 1
//             else {
//                 result[char] = 1;
//             }
//         }
        
//     }
//     // if character is something else (space, period, etc.) don't do anything
//     // return object at end
//     return result;
// }

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }

    return true;
}

function charCount(str) {
    // make object to return at end
    var result = {};
    // loop over string for each character...
    for (var char of str) {
        // if the char is a number/letter AND a key in object, add one to count
        // if (/[a-z0-9]/.test(char)) {
        //     result[char] = ++result[char] || 1;
        // }

        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
        
    }
    // if character is something else (space, period, etc.) don't do anything
    // return object at end
    return result;
}

console.log(charCount('Hello WORLD hi!!!'));