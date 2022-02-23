const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
};

const power = (x, n) => {
    if (n === 0) return 1;
    return x * power(x, n - 1);
};
let test = power(2, 3);
console.log(test);

const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(7));

const palindrome = (str) => {
    if (str.length === 0 || str.length === 1) return true;
    let first = str.slice(0, 1);
    let last = str.slice(-1);
    let mid = str.slice(1, -1);
    if (first !== last) return false;

    return palindrome(mid);
};
console.log(palindrome("xyxyxz"));
