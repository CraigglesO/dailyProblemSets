let arr = [33, 6, 21, 12, 19, 29, 38, 22, 14, 40]

// This is a pick *last* element as pivot implementation
function insertionSort (arr) {
  for (let i = 1, n = arr.length; i < n; i++) {
    let key = arr[i] // value in question, store it elsewhere, as this index value might be replaced
    let j = i - 1 // start comparisons right below the key
    while (j >= 0 && arr[j] > key) { // if the array index exists and the value is less than the key:
      arr[j + 1] = arr[j] // move the value up
      j-- // move down the array
    }
    arr[j + 1] = key // set the key in its new position
  }
  return arr
}

console.log(insertionSort(arr))
