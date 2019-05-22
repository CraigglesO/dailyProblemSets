# MergeSort

Divide and conquer algorithm

## References
https://en.wikipedia.org/wiki/Merge_sort

## Runtime Complexity
### Best
O(n * log(n))
### Average
O(n * log(n))
### Worst
O(n * log(n))

## Memory Complexity
O(n)


## Algorithm
```
MERGESORT(A, lo, hi)

1 if lo < hi
2   mid = lo + floor((hi + lo) / 2)
3   MERGESORT(A, lo, mid - 1)
4   MERGESORT(A, mid + 1, hi)
5   MERGE(A, lo, mid, hi)

MERGE(A, lo, mid, hi)

1 Create temporary arrays L & R
2   for i from 0 to mid - lo + 1
3     L[i] = arr[lo + i]
4   for j from 0 to hi - mid
5     R[j] = arr[mid + 1 + j]
6   i = 0; j = 0; k = lo
6   while i < mid - lo + 1 && j < hi - mid
7     if (L[i] < R[j])
8       A[k] = L[i]
9       i++
10    else
11      A[k] = R[j]
12      j++
13    k++
14   while i < mid - lo + 1
15    A[k] = L[i]
16    i++; k++
17   while j < hi - mid
18    A[k] = R[i]
19    j++; k++
```
