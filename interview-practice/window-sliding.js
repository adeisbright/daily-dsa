/**
 * With Window Sliding Algorithm, you can convert a nested for loop into a single loop 
 * to reduce time complexity.
 * Let us use a program where this will be applied.
 * 
 * QUESTION
 * ---------- 
 * Given an array of integers of size ‘n’. Our aim is to calculate the maximum sum of ‘k’ 
 * consecutive elements in the array.

 * EXAMPLES
 * ---------
 * Input  : arr[] = {100, 200, 300, 400} , k = 2
 * Output : 700
 * We get the maximum by using {300 , 400}
 * 
 * 
 * Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20} , k = 4 
 * Output : 39
 * We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.
 * 
 * Input  : arr[] = {2, 3} , k = 3
 * Output : Invalid
 * There is no subarray of size 3 as size of whole array is 2.
 */

//Using Brute Force Solution

const maxSumSubArray = (arr, k) => {
    let sum = Number.MIN_VALUE;
    let arrLength = arr.length;
    if (arrLength < k) {
        return "Invalid";
    }
    for (let i = 0; i < arrLength; i++) {
        let sub = arr.slice(i, k + i);
        if (sub.length === k) {
            let subSum = Number.MIN_VALUE;
            for (let j = 0; j < k; j++) {
                subSum += sub[j];
            }
            if (subSum > sum) {
                sum = subSum;
            }
        }
    }
    return sum;
};

const test1 = maxSumSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);

function maxSum(arr, k) {
    // Initialize result
    let max_sum = Number.MIN_VALUE;
    let n = arr.length;
    // Consider all blocks starting with i.
    for (let i = 0; i < n - k + 1; i++) {
        let current_sum = 0;
        for (let j = 0; j < k; j++) current_sum = current_sum + arr[i + j];

        // Update result if required.
        max_sum = Math.max(current_sum, max_sum);
    }

    return max_sum;
}

const test2 = maxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);

//Using Window Sliding Algorithm
function maxSumofK(arr, k) {
    let max = 0;
    let sum = 0;

    //find initial sum of first k elements
    for (let n = 0; n < k; n++) {
        sum += arr[n];
    }
    //iterate the array once and increment the right edge
    for (let i = k; i < arr.length; i++) {
        // let currentElement = arr[i];
        // let previousElement = arr[i - k];
        // console.log(arr.slice(i + 1 - k, i + 1), i);
        sum += arr[i] - arr[i - k]; // Subtract the previous element from the window sum and add the current element
        //compare if sum is more than max, if yes then replace max with new sum value
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}

// const test3 = maxSumofK([1, 4, 2, 10, 23, 3, 1, 0, 20, 29], 4);
// console.log(test3);

const maxSubSum = (nums, k) => {
    let sum = 0;
    let numsLength = nums.length;
    let numsHash = {};
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let max = sum;
    for (let j = k; j < numsLength; j++) {
        sum += nums[j] - nums[j - k];
        if (sum > max) {
            numsHash = {
                sum: sum,
                startIndex: j + 1 - k,
                endIndex: j,
            };
            max = sum;
        }
    }
    let indexes = [];
    let elements = [];
    for (let i = numsHash.startIndex; i <= numsHash.endIndex; i++) {
        indexes.push(i);
        elements.push(nums[i]);
    }

    return {
        maxSum: max,
        indexes: indexes,
        elements: elements,
    };
};

console.log(maxSubSum([1, 4, 2, 3, 5, 6], 3));

const sortWord = word => word.split("").sort().join("")

const isAnagram = (word , char) => {

    for (let i = 0 ; i < char.length ; i++){

    }

    for (let j  = char.length ; j < word.length ; j++){

    }
} 

