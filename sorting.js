const selectionSort = (arr) => {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        let min = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
};

const insertionSort = (arr) => {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j > 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
};

const merge = (a, b) => {
    let sorted = [];
    while (a.length && b.length) {
        if (a[0] < b[0]) sorted.push(a.shift());
        else sorted.push(b.shift());
    }
    return sorted.concat(a.slice().concat(b.slice()));
};
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let first = mergeSort(arr.slice(0, mid));
    let last = mergeSort(arr.slice(mid));
    return merge(first, last);
};

console.log(merge([1, 3, 4], [5, 4, 5, 6]));
const quickSort = (arr) => {};
