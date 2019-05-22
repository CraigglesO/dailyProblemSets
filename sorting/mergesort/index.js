let arr = [33, 6, 21, 12, 19, 29, 38, 22, 14, 40]

function merge (arr, lo, mid, hi) {
  let leftLength = mid - lo + 1
  let rightLength = hi - mid

  let leftSplit = [] // prep left array
  let rightSplit = [] // prep right array

  for (let i = 0; i < leftLength; i++) leftSplit.push(arr[lo + i])
  for (let i = 0; i < rightLength; i++) rightSplit.push(arr[mid + 1 + i])

  let i = 0 // Initial index of first subarray
  let j = 0 // Initial index of second subarray
  let k = lo // Initial index of merged subarray

  while (i < leftLength && j < rightLength) { // merge the two arrays swapping between the two as one key is less than the other
    if (leftSplit[i] <= rightSplit[j]) {
      arr[k] = leftSplit[i]; i++
    } else {
      arr[k] = rightSplit[j]; j++
    }
    k++
  }
  while (i < leftLength) { arr[k] = leftSplit[i]; i++; k++ } // copy all remaining leftSplit keys
  while (j < rightLength) { arr[k] = rightSplit[j]; j++; k++ } // copy all remaining rightSplit keys
}

// split the array until we have many arrays of length 1
// than start joining them together, ensuring they are in order as we go
function mergeSort (arr, lo = 0, hi = arr.length - 1) {
  if (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2)
    mergeSort(arr, lo, mid) // sort 'partitioned' lower array
    mergeSort(arr, mid + 1, hi) // sort 'partitioned' upper array

    merge(arr, lo, mid, hi)
  }
  return arr
}

console.log(mergeSort(arr))
