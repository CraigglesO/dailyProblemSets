let arr = [1, 2, 3, 4, 5]
let n = 2

function rotateArray (arr, n) {
  if (n > 0) {
    while (n--) {
      let num = arr.pop()
      arr.unshift(num)
    }
  } else if (n < 0) {
    while (n++) {
      let num = arr.shift()
      arr.push(num)
    }
  }
  return arr
}

console.log(rotateArray(arr, n))
