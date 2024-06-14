function isPalindrome(s) {
    // Base case: if the string length is 0 or 1, it's a palindrome
    if (s.length <= 1) {
        return true;
    }
    
    // Compare the first and last characters
    if (s[0] !== s[s.length - 1]) {
        return false;
    }
    
    // Recursively check the substring without the first and last characters
    return isPalindrome(s.slice(1, s.length - 1));
}

console.log(isPalindrome("radar"));
console.log(isPalindrome("level")); 
console.log(isPalindrome("hello"));
console.log(isPalindrome("")); 
console.log(isPalindrome("a")); 
console.log(isPalindrome("ab"));