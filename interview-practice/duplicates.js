const duplicates = [1, 2, 1, 2, 3, 5, 4, 2, 3];

const getDuplicates = (arg) => {
    const hash = {};
    const d = [];
    arg.map((e) => {
        if (hash.hasOwnProperty(String(e))) {
            hash[e] += 1;
            if (!d.includes(e)) {
                d.push(e);
            }
        } else {
            hash[e] = 1;
        }
    });

    return {
        modes: hash,
        duplicates: d,
    };
};
console.log(getDuplicates(duplicates).duplicates);

console.log("-----Working on Using Reduce-----------");

const orders = [
    {
        id: 1,
        product: "Beans",
        cost: 30,
        quantity: 3,
    },
    {
        id: 2,
        product: "Rice",
        cost: 20,
        quantity: 30,
    },
    {
        id: 3,
        product: "Cashew",
        cost: 10,
        quantity: 10,
    },
];

const totalCost = orders.reduce((a, b) => a + b.cost, 0);
console.log(`The cost is ${totalCost}`);

//Working with Splice and the rest
console.log("Working on sorting and the reverse of orders");
const cloneOrders = Array.from(orders);

console.log(orders[0]);
let sortOrders = orders.sort((a, b) => a.product.localeCompare(b.product));
console.log(orders[0]);
console.log(cloneOrders[0]);
console.log(sortOrders[0]);

//Working with Split and Join => Split breaks a string into array while join joins a string to array

let str = "Adeleke";
console.log(str.split(""));
console.log(["h", "e", "l", "l", "o"].join(""));

console.log("---Working With Splice , Slice");
let fruits = ["Orange", "Mango", "PawPaw", "Guava"];

//console.log(fruits);
let f = fruits.splice(0, 3, "Apple"); //Splice is destructive. It removes element from an array
console.log(f);
console.log(fruits);
/**
 * Splice removes element from an array and returns the removed
 * element.
 * If you provide an additional element to add , it will add that element
 * at the position of the elements that were removed
 *
 */

fruits.push("Orange", "Ginger");
console.log(fruits);
fruits.splice(0, 0, "Okra"); // At index 0 , do not remove any element , add Okra at that point
console.log("After test removal", fruits);
// Working with Slice

const alphas = ["a", "b", "c", "d", "e", "f"];

let alpha = alphas.slice(0, 1); //=> Start from the beginning and remove 1 element.
console.log(alpha, alphas);

let alpha2 = alphas.slice(1, 1); //=> This will return no element for alpha2
console.log(alpha2, alphas);
