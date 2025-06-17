/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    if (x < 0 ) return false;

    const s = x.toString();
    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
};

console.log(isPalindrome(121)); 
console.log(isPalindrome(-121)); 
console.log(isPalindrome(10));   
console.log(isPalindrome(0)); 