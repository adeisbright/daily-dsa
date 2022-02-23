const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
};

const bubbleSort2 = (arr) => {
    let unsorted_until_index = arr.length - 1;
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < unsorted_until_index; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];

                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return arr;
};

console.log(bubbleSort2([65, 55, 45, 35, 25, 15, 10]));
