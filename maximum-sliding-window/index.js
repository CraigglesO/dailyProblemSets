let arr = [1, 2, 3, 4, 3, 2, 1, 2, 5]
let windowSize = 4
// expected output: [4, 4, 4, 4, 3, 5]

function findMaxSlidingWindow (arr, windowSize) {
  // prep variables
  let res = []
  let curIndex = 0
  let window = []
  // setup sorted list until we reach window size
  while (curIndex < windowSize) {
    // remove any numbers both older and lower than the previous value
    while (window.length && arr[window[0]] <= arr[curIndex]) window.shift()
    // lastly put the new value in the window
    window.unshift(curIndex)
    // increment the seek index
    curIndex++
  }
  // get the current greatest number
  res.push(arr[window[window.length - 1]])
  while (curIndex < arr.length) {
    // always ensure we cleanup stored indexes that are older then the windowSize
    while (curIndex - window[window.length - 1] + 1 > windowSize) window.pop()
    // remove any numbers both older and lower than the previous value
    while (window.length && arr[window[0]] <= arr[curIndex]) window.shift()
    // lastly put the new value in the window
    window.unshift(curIndex)
    // increment the seek index
    curIndex++
    // store the current max
    res.push(arr[window[window.length - 1]])
  }

  return res
}

console.log(findMaxSlidingWindow(arr, windowSize))

// Runtime Complexity: O(log(n)) n => arr.length
// Memory Complexity O(w) w => windowSize
