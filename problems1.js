const maxSubarray = (arr) => {
    let prev = 0;
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        prev = Math.max(prev + arr[i], arr[i]);
        max = Math.max(prev, max);
    }
    return max;
};
let test = maxSubarray([2, 1, -2, 3, 2]);
console.log(test);
