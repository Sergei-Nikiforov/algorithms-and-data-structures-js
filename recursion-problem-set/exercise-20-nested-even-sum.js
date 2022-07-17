// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an abject which may contain nested objects.
var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
//   nestedEvenSum(obj1); // 6
//   nestedEvenSum(obj2); // 10

function nestedEvenSum(obj, sum=0) {
//    let sum = 0;
    for (let el in obj) {
        if (typeof obj[el] === 'object') {
            sum += nestedEvenSum(obj[el]);
        } else {
            if (typeof obj[el] === 'number') {
                if (obj[el] % 2 === 0) {
                    sum += obj[el];
                }
            }
        }
    }
    return sum;
}

console.log(nestedEvenSum(obj2));