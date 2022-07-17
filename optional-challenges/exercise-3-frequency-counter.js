// Write a function called sameFrequency. Given two positive integers, find out if the numbers
// have the same frequency of digits.

function sameFrequency(num1, num2) {
    if (num1 < 0 || num2 < 0) return false;

    let str1 = num1 + '';
    let str2 = num2 + '';
    if (str1.length !== str2.length) return false;

    let lookup = {};

    console.log(str1);
    for (let char of str1) {
//        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
        lookup[char] = (lookup[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!lookup[char]) {
            return false;
        } else {
            lookup[char] -= 1;
        }
    }
    return true;
}

//console.log(sameFrequency(3589578, 5879385));

function sameFrequency_1(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }

  console.log(sameFrequency_1(3589578, 5879385));