# Search Rotated Array

## Problem Statement
Search for a given number in a sorted array that has been rotated by some arbitrary number. Return -1 if the number does not exist. Assume that the array does not contain duplicates.

Consider the following array:
176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155
                            ^ rotation end



## Runtime Complexity
O(log(n))
This is simply a modified binary search. Notice that no matter what either the left or right of the midpoint will be sorted

## Memory Complexity
O(1) iterative; O(log(n)) recursive
