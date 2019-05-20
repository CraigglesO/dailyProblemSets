let arr = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6]
let key = 5 // lo: 15 & hi: 17

function findLowIndex (arr, key) {
  // create index variables
  let lo = 0
  let hi = arr.length - 1
  let mid = Math.floor(hi / 2)
  // binary search type loop, continue until lo is set to mid
  do {
    if (arr[mid] >= key) hi = mid - 1
    else lo = mid + 1
    mid = lo + Math.floor((hi - lo) / 2)
  } while (lo <= hi)
  if (arr[lo] === key) return lo
  else return -1
}

function findHighIndex (arr, key) {
  // create index variables
  let lo = 0
  let hi = arr.length - 1
  let mid = Math.floor(hi / 2)
  // binary search, continue until hi is less them mid
  do {
    if (arr[mid] <= key) lo = mid + 1
    else hi = mid - 1
    mid = lo + Math.floor((hi - lo) / 2)
  } while (hi >= lo)
  if (arr[hi] === key) return hi
  else return -1
}

console.log(findLowIndex(arr, key))
console.log(findHighIndex(arr, key))
