/**
 * CodeWars Challenge: Convert a String to a Number
 * Difficulty: 8kyu
 *
 * PROBLEM:
 * We need a function that can transform a string into a number. What ways of achieving this do you know?
 *
 * Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
 *
 * Examples:
 * "1234" --> 1234
 * "605"  --> 605
 * "1405" --> 1405
 * "-7"   --> -7
 *
 * INITIAL THOUGHTS:
 * - We can use parseInt() to convert string to integer
 * - We can use Number() constructor
 * - We can use the unary plus operator (+)
 * - We can use Math.floor() with parseFloat() for decimal strings
 *
 * SOLUTION:
 */

const stringToNumber = (str) => parseInt(str);

/**
 * UNDERSTANDING:
 * - parseInt() is a built-in JavaScript function that parses a string argument and returns an integer
 * - It automatically handles negative numbers
 * - It ignores any non-numeric characters after the number
 * - It's one of the most straightforward ways to convert a string to a number
 *
 * Alternative solutions could be:
 * - return Number(str);
 * - return +str;
 * - return Math.floor(parseFloat(str));
 *
 * NOTES FOR NEXT TIME:
 * - Remember that parseInt() is specifically for converting to integers
 * - For decimal numbers, use parseFloat() instead
 * - The unary plus operator (+) is a concise alternative
 * - Number() constructor is more explicit but does the same thing
 */
