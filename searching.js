const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const linearSearch = (arr, target) => {
    let runTime = 0;
    for (let i = 0; i < arr.length; i++) {
        runTime++;
        if (arr[i] === target) {
            return {
                runTime: runTime,
                index: i,
            };
        }
    }
    return {
        runTime: runTime,
        index: -1,
    };
};

const binarySearch = (arr, target) => {
    let min = 0;
    let max = arr.length - 1;
    let guess;
    let runTime = 0;
    while (max >= min) {
        runTime++;
        guess = Math.floor((max + min) / 2);
        let result = arr[guess];
        if (result === target) {
            return {
                runTime: runTime,
                index: guess,
            };
        } else if (result < target) {
            min = guess + 1;
        } else {
            max = guess;
        }
    }
    return {
        runTime: runTime,
        index: -1,
    };
};

const interpolationSearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    let runTime = 0;
    while (low < high && target >= arr[low] && target <= arr[high]) {
        runTime++;
        const delta = arr[high] - arr[low];
        const pos =
            low + Math.floor(((target - arr[low]) * (high - low)) / delta);
        if (arr[pos] === target) {
            return {
                runTime: runTime,
                index: pos,
            };
        } else if (arr[pos] < target) {
            low = position + 1;
        } else {
            high = position - 1;
        }
    }
    return {
        runTime: runTime,
        index: -1,
    };
};

let test = linearSearch(scores, 8);
console.log(test);
