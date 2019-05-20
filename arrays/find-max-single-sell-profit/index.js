// https://en.wikipedia.org/wiki/Maximum_subarray_problem
let arr = [1, 2, 3, 4, 3, 2, 1, 2, 5]

function findBuySellStockPrices (stocks) {
  let currentProfit = 0
  let currentBuy = stocks[0]
  let globalSell = stocks[1]
  let globalProfit = globalSell - currentBuy
  for (let i = 1; i < stocks.length; i++) {
    currentProfit = stocks[i] - currentBuy
    if (currentProfit > globalProfit) {
      globalProfit = currentProfit
      globalSell = stocks[i]
    }
    if (stocks[i] < currentBuy) currentBuy = stocks[i]
  }

  return [globalSell - globalProfit, globalSell]
}

console.log(findBuySellStockPrices(arr))

// Kadane's algorithm (Maximum Subarray Problem)
// current profit = INT_MIN
// current buy = stock_prices[0]
// global sell = stock_prices[1]
// global profit = global sell - current buy
// For i = 1 to stock_prices.length:
//     current profit = stock_prices[i] - current buy
//     if current profit is greater than global profit
//         then update global profit to current profit and update global sell to stock_prices[i]
//     if stock_prices[i] is less than current buy then update current buy to stock_prices[i]
// return global profit and global sell

// VISUALIZE VIA STANDARD WORDING:
// function maximumSubArray (arr) {
//   let currentBiggest = 0
//   let currentMax = arr[0]
//   let globalMin = arr[1]
//   let globalMax = globalMin - currentMax
//   for (let i = 1; i < arr.length; i++) {
//     currentBiggest = arr[i] - currentMax
//     if (currentBiggest > globalMax) {
//       globalMax = currentBiggest
//       globalMin = arr[i]
//     }
//     if (arr[i] < currentMax) currentMax = arr[i]
//   }
//
//   return [globalMin - globalMax, globalMin]
// }
