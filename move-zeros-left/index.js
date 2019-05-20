let arr = [1, 10, -1, 11, 5, 0, -7, 0, 25, -35]

function moveZerosToLeft (arr) {
  // set both read and write index to the end of the array
  let readIndex = arr.length - 1
  let writeIndex = readIndex
  // loop, everytime we find a 0, keep the writeIndex in place and decrement read
  // otherwise move the variable found up to the current write position
  do {
    if (arr[readIndex] !== 0) {
      arr[writeIndex] = arr[readIndex]
      writeIndex--
    }
  } while (--readIndex >= 0)
  // now we write 0's to writeIndex until we reach the bottom of the array
  while (writeIndex >= 0) {
    arr[writeIndex] = 0
    writeIndex--
  }

  return arr
}

console.log(moveZerosToLeft(arr))
