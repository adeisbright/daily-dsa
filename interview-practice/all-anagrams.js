/**
438. Find All Anagrams in a String
Given two strings s and p, return an array of all the start indices of p's anagrams in s. 
You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 

Constraints:

1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters. 
 */

/**
 * @description creates an object using the values as key and the frequency of
 * each value as the value for the key
 * @param {Any} arg the value to hash
 * @return {Object} the hash
 * @example
 * hashify([1 , 3 , 2 , 1])
 * {
 *  1 : 2 ,
 *  2 : 1 ,
 *  3 : 1
 * }
 */
const hashify = (arg) => {
    const hash = {};

    Array.from(arg).map((val) => {
        if (hash.hasOwnProperty(val)) {
            hash[val] += 1;
        } else {
            hash[val] = 1;
        }
    });
    return hash;
};

/**
 * @description checks if two objects are equal
 * @param {Object} a base object to use for comparison
 * @param {Object} b
 * @returns
 */

const compareHashValues = (a, b) => {
    let aLength = Object.keys(a).length;
    let bLength = Object.keys(b).length;
    if (aLength !== bLength) return false;

    for (let key of Object.keys(b)) {
        if (!a.hasOwnProperty(key) || a[key] !== b[key]) {
            return false;
        }
    }
    return true;
};

const hash1 = hashify("aab");
const hash2 = hashify("baa");

console.log(hash1, hash2);

console.log(compareHashValues(hash1, hash2));

// var findAnagrams = function (s, p) {
//     const pLength = p.length;
//     const output = [];
//     const sArray = s.split("");
//     const pArray = p.split("");
//     //const pHash = {}; //Gets the frequency of each items
//     //const aHash = {}; // Gets the frequency of the substring . We will then compare frequency to see if equal
//     sArray.map((e, i) => {
//         if (pArray.includes(e)) {
//             let arr = sArray.slice(i, pLength + i);
//             if (
//                 arr.length === pLength &&
//                 pArray.every((a) => arr.includes(a))
//             ) {
//                 output.push(i);
//             }
//         }
//     });
//     return output;
// };

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
    const pLength = p.length;
    const output = [];
    const pHash = hashify(p);
    let sLength = s.length;
    for (let i = 0; i < sLength; i++) {
        let arr = s.substring(i, pLength + i);
        const arrHash = hashify(arr);
        if (compareHashValues(arrHash, pHash)) {
            output.push(i);
        }
    }
    return output;
};

let tester = findAnagrams("cbaebabacd", "abc");
console.log(tester);
