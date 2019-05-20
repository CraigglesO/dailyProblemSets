let arr1 = [6, 7, 10, 25, 30, 63, 64]
let arr2 = [-1, 4, 5, 6, 7, 8, 50]
let arr3 = [1, 6, 10, 14]

function smallestCommonNumber (arr1, arr2, arr3) {
  let arr1Index = 0
  let arr2Index = 0
  let arr3Index = 0

  do {
    if (arr1[arr1Index] === arr2[arr2Index] && arr1[arr1Index] === arr3[arr3Index]) return arr1[arr1Index]
    while (arr1[arr1Index] > arr2[arr2Index]) arr2Index++
    while (arr2[arr2Index] > arr3[arr3Index]) arr3Index++
    while (arr3[arr3Index] > arr1[arr1Index]) arr1Index++
  } while (arr1Index < arr1.length && arr2Index < arr2.length && arr3Index < arr3.length)

  return -1
}

console.log(smallestCommonNumber(arr1, arr2, arr3))
