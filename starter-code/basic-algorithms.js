var hacker1 = "Sandra";

console.log("The driver's name is " + hacker1 + ".");
var hacker2 = prompt("What's navigator's name?");
console.log("The navigator's name is " + hacker2 + ".");

if (hacker1.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "Yo, navigator got the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    "wow, you both got equally long names, it has " +
      hacker2.length +
      " characters!!"
  );
}

// Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
for (var i = 0; i < 1; i++) {
  console.log(
    hacker1
      .split("")
      .join(" ")
      .toUpperCase()
  );
}

// Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
for (var i = 0; i < 1; i++) {
  console.log(
    hacker1
      .split("")
      .reverse(" ")
      .join("")
  );
}
//  --------------------------------------
var n = hacker1.localeCompare(hacker2);
if (n === 1) {
  console.log("The driver's name goes first");
} else if (n === -1) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}
console.log(n);
// Returns -1 if str1 is sorted before str2
// Returns 0 if the two strings are equal
// Returns 1 if str1 is sorted after str2


//Ask the user for a new string and check if it's a Palindrome.
var str = prompt("Let's check the palindrome. Give me a word:");

function checkPalindrome(str) {
  return (
    str ==
    str
      .split("")
      .reverse()
      .join("")
  );
}
var value = checkPalindrome(str);
// console.log("value:",value)

if (value === true) {
  console.log("The word is palindrome.");
} else {
  console.log("The word isn't palindrome.");
}

// Generate 3 parragraphs.Store the text in a String
// Make your program count the number of words in the string
// Make your program count the number of times the latin word et appears
var string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). et et et "

console.log(string.split(' ').length);
var count = (string.match(/et/g) || []).length;
console.log(count);
