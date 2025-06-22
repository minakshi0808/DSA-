function isPalindrome(str) {
    // Convert the string to lowercase for case-insensitive comparison
    let normalizedStr = str.toLowerCase();

    // Get the length of the string
    let len = normalizedStr.length;

    // Loop from the start to the middle of the string
    for (let i = 0; i < Math.floor(len / 2); i++) {
        // Compare the character at position i with the character at the mirrored position from the end
        if (normalizedStr[i] !== normalizedStr[len - 1 - i]) {
            // If characters don't match, it's not a palindrome
            return false;
        }
    }

    // If all corresponding characters matched, it's a palindrome
    return true;
}

// Example usage:
console.log(isPalindrome("Racecar")); // Output: true
console.log(isPalindrome("Hello"));   // Output: false