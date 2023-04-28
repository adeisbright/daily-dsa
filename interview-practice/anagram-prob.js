/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

const sortWord = (word) => word.split("").sort().join("");

var findAnagrams = function (s, p) {
    const pLength = p.length;
    const sortedP = sortWord(p);
    const output = [];

    let sLength = s.length;
    let fragment = "";
    for (let i = 0; i < pLength; i++) {
        fragment += s[i];
    }
    if (sortedP === sortWord(fragment)) {
        output.push(0);
    }
    for (let j = pLength; j < sLength; j++) {
        fragment = fragment.replace(fragment[0], s[j]);
        if (sortedP === sortWord(fragment)) {
            output.push(j + 1 - pLength);
        }
    }
    return output;
};

const anagramInWords = (words = ["dell", "ledl", "abc", "cba"]) => {
    // The output object
    const anagrams = {};

    for (let i in words) {
        let word = words[i];

        // sort the word like you've already described
        let sorted = word.split("").sort().join("");

        // If the key already exists, we just push
        // the new word on the the array
        if (anagrams[sorted] != null) {
            anagrams[sorted].push(word);
        }
        // Otherwise we create an array with the word
        // and insert it into the object
        else {
            anagrams[sorted] = [word];
        }
    }
};
