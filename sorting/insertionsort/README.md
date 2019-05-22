# InsertionSort

## References
https://en.wikipedia.org/wiki/Insertion_sort

## Runtime Complexity
### Best
O(n)
### Average
O(n^2)
### Worst
O(n^2)

## Memory Complexity
O(1)

## Algorithm
```
INSERTION_SORT(A)

1 for i = 1 to n - 1
2   j = i - 1
3   key = A[i]
4   while j >= 0 and A[j] > key
5     arr[j + 1] = arr[j]
6     j--
7   arr[j + 1] = key
```
