function spinWords(string) {
    let splitWords = string.split(" ");
    let length = splitWords.length;
    for (let i = 0; i < length; i++) {
        let word = splitWords[i];
        if (word.length > 4) {
            let reversal = "";
            for (let j = 0; j < word.length; j++) {
                reversal += word[word.length - 1 - j];
            }
            splitWords[i] = reversal;
        }
    }
    return splitWords.join(" ");
}

//console.log(spinWords("This is benin"));

const calPoints = function (ops) {
    let arrayCopy = [...ops];
    let i = 0;
    while (i < ops.length) {
        if (ops[i] === "C") {
            arrayCopy.splice(i - 1, 2);
        }
        i++;
    }
    let j = 0;
    while (j < arrayCopy.length) {
        if (arrayCopy[j] === "D") {
            arrayCopy[j] = Number(arrayCopy[j - 1]) * 2;
        } else if (arrayCopy[j] === "+") {
            arrayCopy[j] = Number(arrayCopy[j - 2]) + Number(arrayCopy[j - 1]);
        }
        j++;
    }
    console.log(arrayCopy);
    return arrayCopy.reduce((a, b) => a + Number(b), 0);
};
console.log(calPoints(["5", "2", "C", "D", "+"]));

const removeDuplicates = (sortedArray) => {
    let i = 0;
    while (i < sortedArray.length) {
        if (i !== 0 && sortedArray[i] === sortedArray[i - 1]) {
            sortedArray.splice(i, 1);
        }
        i++;
    }
    return sortedArray;
};

console.log(removeDuplicates([1, 1, 2]));
