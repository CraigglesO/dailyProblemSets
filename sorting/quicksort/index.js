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

// simply: choose a pivot, find all values less than pivot and put in front, than place pivot after said values
function partition (arr, lo, hi) {
  let pivot = arr[hi] // get pivot value (this case we always use upper [worst case performance if the pivot is the largest number in the current array])
  let i = lo - 1
  for (let j = lo; j < hi; j++) { // for the entirely of the array
    if (arr[j] <= pivot) { // check if the current value is less than pivot
      i++
      if (i !== j) swap(arr, i, j) // modification - don't run a SWAP if the indexes are equal
    }
  }
  i++
  swap(arr, i, hi) // now put the pivot after all the values we found in the array to be less than pivot

  return i
}

function swap (arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

console.log(quickSort(arr))
