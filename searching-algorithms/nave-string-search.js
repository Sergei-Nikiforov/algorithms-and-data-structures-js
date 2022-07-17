// Найти сколько раз подстрока встречается в искомой строке

function search(str, substr) {
    let count = 0;
    let i = 0;
    for (let letter of str) {
        letter === substr[i] ? i++ : 0;
        // if (letter === substr[i]) {
        //     i++;
        // } else {
        //     i = 0;
        // }

        if (i === substr.length) {
            count++;
            i = 0;
        }
    }

    return count;
}

// console.log(search('hog;hiijgfghigg/hihi', 'hi'));

function naiveSearch(long, short) {
    let count = 0;
    for(let i = 0; i < long.length; i++) {
        for(let j = 0; j < short.length; j++) {
            if (short[j] !== long[i+j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
}

//console.log(naiveSearch('lorie loled', 'lol'));