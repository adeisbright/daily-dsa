// Customer comes to the store to buy some products. He can  buy apples ($3), grapes ($5) and peaches ($7).
//There’re also 2 types of discounts: 1) If customer buys more than 1 apple, he gets a discount of 20% for all apples; 2) If customer buys one grapes he gets another one for free. Calculate the price of the basket, getting into account data comes into the following format

// following the logic interviewer tried to explain to me, which kept in my memory):

//[["grapes", 1],["apples", 0],["peaches", 1]] => 12
//[["grapes", 1],["apples", 1],["peaches", 1]] => 15
//[["grapes", 1],["apples", 2],["peaches", 1]] => 16.8
//[["grapes", 3],["apples", 1],["peaches", 1]] => 20
// #

const computePrice = (purchaseOrders) => {
    const fruitsCost = {
        apples: 3,
        grapes: 5,
        peaches: 7,
    };

    let totalPurchaseItems = purchaseOrders.length;
    let costOfPurchase = 0;

    for (let i = 0; i < totalPurchaseItems; i++) {
        let item = purchaseOrders[i][0];
        let itemCount = purchaseOrders[i][1];
        let itemPrice = fruitsCost[item] * itemCount;

        if (item === "apples" && itemCount > 1) {
            itemPrice = itemPrice - 0.2 * itemPrice;
        } else if (item === "grapes" && itemCount > 0) {
            itemCount += 1;
            // itemPrice = fruitsCost[item] * itemCount;
        }
        costOfPurchase += itemPrice;
    }
    return costOfPurchase;
};

console.log(
    computePrice([
        ["grapes", 3],
        ["apples", 1],
        ["peaches", 1],
    ])
);
