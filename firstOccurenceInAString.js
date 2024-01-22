// Given two strings needle and haystack,  return the index of the first occurence of needle in haystack, or -1 if needle is not
// part of haystack.
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (needle == "") {
    return -1;
  }
  if (haystack.length == 0) {
    return -1;
  }

  let first3Letters = "";
  let firstOccurrenceIndex = -1;
  for (let i = 0; i < haystack.length; i++) {
    first3Letters = haystack.slice(i, i + needle.length);
    if (first3Letters == needle) {
      firstOccurrenceIndex = i;
      break;
    }
  }

  return firstOccurrenceIndex;
};

let testcase1 = {
  haystack: "hello",
  needle: "sad",
};

let result = strStr(testcase1.haystack, testcase1.needle);
console.log(result);
