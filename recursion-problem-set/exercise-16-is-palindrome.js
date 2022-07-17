// Write a recursive function called isPalindrome which returnse true if the string
// passed to it is a palindrome (reads the same forward and backward).
// Otherwise it reurns false;

function isPalindrome(arr) {
    if (arr.length === 0) return false;
    if (arr.length === 1) return true;
    if (arr[0] === arr.slice(-1)) return isPalindrome(arr.slice(1, - 1));

    return false;
}

console.log(isPalindrome('amanaplanacanalpanama'));