# QuickSort

## References
https://en.wikipedia.org/wiki/Quicksort
https://www.youtube.com/watch?v=MZaf_9IZCrc

## Runtime Complexity
### Best
O(n * log(n))
### Average
O(n * log(n))
### Worst
O(n^2)

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
