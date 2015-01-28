// HERE, I'm introducing (at a very basic level) a
// very powerful feature of JavaScript. It's called
// regular expressions.

// Here's a plain old string
var words = 'Hello, class, have a great day!';

// Next, I want to extract all the words in this string
// and put them into an array.
//
// Strings have a function called match, and the
// first argument is a regular expression.
//
// Regular expressions are short, strange, but powerful
// ways to describe a pattern.
//
// What match does is it says: "Search this string and
// find any parts that match the regular expression
// pattern. Then return all matches as an array."
var wordsWithoutPunctuation = words.match(/\w+/g);

// Now, wordsWithoutPunctuation is an array that looks like this:
// ['Hello', 'class', 'have', 'a', 'great', 'day']

console.log(wordsWithoutPunctuation);

// So, let's break down the regular expression
//
// First, it starts with a / and ends with a / (I'll talk
// about the ending g in a second)
//
// Inbetween the opening and closing /, you put the pattern
// you want to match.
//
// In our case, we put \w+ in there.
//
// \w says, "Match a word character" where word is usually
// defined as any combination of A-Z, a-z, 0-9, or _
//
// The + says, match this pattern (any word character)
// at least one time, and try matching it until you find
// a mismatch (such as a space)
//
// Finally, the trailing g that occurs after our ending /
// indicates that we don't want to stop on the first match
// we want to get all matches. The g stands for "global"
//
//
// Regular expresisons are really powerful. I may have
// Clinton give a guest lecture on them, but in the mean-
// time, you can read more about them here:
//
// http://www.w3schools.com/jsref/jsref_obj_regexp.asp
//
// And here:
// http://www.regular-expressions.info/quickstart.html
//
// And play with them here:
// http://www.w3schools.com/jsref/jsref_match.asp
//
// Or on jsbin here:
// http://jsbin.com/pajorilixu/1/edit?js,console


// Another way for us to have written the previous
// match was like this:

console.log(words.match(/[A-Za-z0-9_]+/g));

// And that's a bit clearer, maybe.
