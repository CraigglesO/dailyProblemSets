# QuickSort

## Problem Statement
Given a list of daily stock prices (integers for simplicity), return the buy and sell prices for making the maximum profit.

We need to maximize the single buy/sell profit. If we can't make any profit, we'll try to minimize the loss. For the below examples, buy and sell prices for making maximum profit are highlighted.

## Runtime Complexity
O(n * log(n))

## Memory Complexity
O(log(n)) (recursive)


## Algorithm
```
QUICKSORT(A, lo, hi)

1 if lo < hi
2   p = PARTITION(A, lo, hi)
3   QUICKSORT(A, lo, p - 1)
4   QUICKSORT(A, p + 1, hi)

PARTITION(A, lo, hi)

1 x = A[hi]
2 i = lo - 1
3 for j = lo to hi - 1
4   if A[j] <= x
5     i = i + 1
6     exchange A[i] with A[j]
7 exchange A[i + 1] with A[hi]
8 return i + 1
```
