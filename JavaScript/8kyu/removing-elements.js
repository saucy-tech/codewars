/**
 * CodeWars Challenge: Removing Elements
 * Difficulty: 8kyu
 *
 * PROBLEM:
 * Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
 * Example:
 * ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
 * None of the arrays will be empty, so you don't have to worry about that!
 *
 * INITIAL THOUGHTS:
 * I can use the filter method to remove every second element from the array.
 * I can use the index to determine if the element should be removed.
 *
 * SOLUTION:
 */

function removeEveryOther(arr) {
return arr.filter((_, index) => index % 2 === 0);
}

/**
 * UNDERSTANDING:
 * This filters out every element that is not at an even index aka every second element.
 * [Concepts being tested]
 * [What you learned]
 *
 * NOTES FOR NEXT TIME:
 * [Things to remember]
 */
