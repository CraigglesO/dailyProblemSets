// let arr = [176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155]
// let key = 200

let arr = [4, 5, 6, 1, 2, 3]
let key = 6

function binarySearchRotated (arr, key) {
  let lo = 0
  let hi = arr.length - 1
  let mid = Math.floor(hi / 2)

  do { // four cases if mid is not the value
    if (arr[mid] === key) return mid // found
    else if (arr[lo] < arr[mid] && arr[lo] <= key && arr[mid] > key) hi = mid - 1 // lower 50% sorted and key is within bounds
    else if (arr[lo] > arr[mid] && arr[lo] <= key && arr[hi] < key) hi = mid - 1 // lower 50% not sorted and hi is less than key
    else lo = mid + 1 // upper 50% is sorted or unsorted. No need for excess logic since we covered all other cases
    mid = lo + Math.floor((hi - lo) / 2)
  } while (lo <= hi)

  return -1
}

console.log(binarySearchRotated(arr, key))
