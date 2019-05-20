let arr = [10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222] // find 47

function binarySearch (arr, search) {
  let lo = 0
  let hi = arr.length
  let mid = Math.floor(hi / 2)

  do {
    if (arr[mid] === search) return mid
    else if (arr[mid] < search) lo = mid + 1
    else hi = mid
    mid = lo + Math.floor((hi - lo) / 2)
  } while (lo < hi)

  return -1
}

console.log(binarySearch(arr, 10))

// Runtime Complexity: O(log(n))
// Memory Complexity O(1) OR O(log(n)) if recursive
