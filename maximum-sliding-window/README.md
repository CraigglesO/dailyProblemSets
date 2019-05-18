# Find Maximum in Sliding Window

## Problem Statement
Given a large array of integers and a window of size w, find the current maximum value in the window as the window slides through the entire array.

Consider the array: [-4, 2, -5, 3, 6]
Let’s try to find all maximums for a window size = 3.
first window would be [-4, 2, -5]
second window would be [2, -5, 3]
last window would be [-5, 3, 6]

## Runtime Complexity
Every element is pushed and popped from the deque only once in a single traversal. Hence, the algorithm works in linear time complexity, O(n).

## Memory Complexity
O(w), where ‘w’ is the window size.
