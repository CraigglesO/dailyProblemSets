let arr = [5, 7, 1, 2, 8, 4, 3]
let n = 10
// let n = 19

function sumOfTwoValues (arr, n) {
  let set = new Set()
  for (let i in arr) {
    if (set.has(n - arr[i])) {
      return true
    } else { set.add(arr[i]) }
  }
  return false
}

console.log(sumOfTwoValues(arr, n))
