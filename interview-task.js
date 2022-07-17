function getMaxPeople(arr) {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        let start = parseInt(arr[i][0].split(':').join(''));
        let end = parseInt(arr[i][1].split(':').join(''));
        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (parseInt(arr[j][0].split(':').join('')) >= start && parseInt(arr[j][1].split(':').join('')) <= end) {
                count++;
            }
        }
        if (count > max) max = count;
    }

    return max;
}

let arr = [['10:00', '16:00'], ['10:00', '11:00'], ['10:20', '11:00'], ['11:05', '11:10'], ['10:40', '10:50']];

console.log(getMaxPeople(arr));