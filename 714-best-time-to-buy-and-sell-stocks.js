/*
    Problem: You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

    Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.
*/

const maxProfit = function(prices,fee) {
    let cash = 0;
    let hold = -prices[0];

    for(let i=1; i<prices.length; i++) {
        cash = Math.max(cash, hold+prices[i] - fee);
        hold = Math.max(hold, cash-prices[i]);
    }

    return cash;
}