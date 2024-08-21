// let prices = [7, 1, 5, 3, 6, 4];


// const buy_or_sell = (prices) => {
//     let buy = prices[0];
//     let profit = 0;

//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] < buy) {
//             buy = prices[i];
//         }

//         let temp = prices[i] - buy;

//         profit = Math.max(profit, temp);
//     }
//     return profit;
// }

// console.log(buy_or_sell(prices));



let price = [3, 4, 1, 5];

const BuyAndSell = (price) => {

    let maxProfit = 0;

    for (let i = 0; i < price.length - 1; i++) {

        if (price[i] < price[i + 1]) {

            maxProfit += price[i + 1] - price[i];

        }

    }

    return maxProfit;
}

console.log(BuyAndSell(price));