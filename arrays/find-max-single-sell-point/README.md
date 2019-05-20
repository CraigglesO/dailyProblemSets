# Find Maximum Single Sell Profit

## Problem Statement
Given a list of daily stock prices (integers for simplicity), return the buy and sell prices for making the maximum profit.

We need to maximize the single buy/sell profit. If we can't make any profit, we'll try to minimize the loss. For the below examples, buy and sell prices for making maximum profit are highlighted.

## Runtime Complexity
O(n)

## Memory Complexity
O(1)


## Kadane's Algorithm
```
current profit = INT_MIN
current buy = stock_prices[0]
global sell = stock_prices[1]
global profit = global sell - current buy
For i = 1 to stock_prices.length:
    current profit = stock_prices[i] - current buy
    if current profit is greater than global profit
        then update global profit to current profit and update global sell to stock_prices[i]
    if stock_prices[i] is less than current buy then update current buy to stock_prices[i]
return global profit and global sell
```
