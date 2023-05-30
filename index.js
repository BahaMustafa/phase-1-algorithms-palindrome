function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

/* 
  Add your pseudocode here
  1. Reverse the input word.
  2. Compare the reversed word with the original word.
  3. If they are the same, return true; otherwise, return false.
*/

/*
  Add written explanation of your solution here
  - The function takes a word as input and converts it into an array of characters using the `split('')` method.
  - It then reverses the order of the characters using the `reverse()` method and joins them back into a string using the `join('')` method.
  - Finally, it compares the reversed word with the original word using the equality operator (`===`) and returns true if they are the same, indicating that the word is a palindrome. Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
