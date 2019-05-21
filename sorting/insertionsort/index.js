let arr = [33, 6, 21, 12, 19, 29, 38, 22, 14, 40]

// This is a pick *last* element as pivot implementation
function quickSort (arr, lo = 0, hi = arr.length - 1) {
  if (lo < hi) {
    let p = partition(arr, lo, hi) // find where to split (partition index)
    quickSort(arr, lo, p - 1) // sort 'partitioned' lower array
    quickSort(arr, p + 1, hi) // sort 'partitioned' upper array
  }
  return arr
}

function partition (arr, lo, hi) {
  let pivot = arr[hi]
  let i = lo - 1
  for (let j = lo; j < hi; j++) {
    if (arr[j] <= pivot) {
      i++
      if (i !== j) {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }
  }
  i++
  let tmp = arr[i]
  arr[i] = arr[hi]
  arr[hi] = tmp

  return i
}

console.log(quickSort(arr))
