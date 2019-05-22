let intervals = [
  { first: 4, second: 12 },
  { first: 13, second: 16 },
  { first: 19, second: 20 },
  { first: 20, second: 24 }
]
// expected output: [{"first":4,"second":12},{"first":13,"second":16},{"first":19,"second":24}]

function mergeIntervals (arr) {
  let res = []

  res.push(arr.shift())

  while (arr.length) {
    let interval = arr.shift()
    let lastSecond = res[res.length - 1].second
    if (interval.first <= lastSecond && interval.second >= lastSecond) res[res.length - 1].second = interval.second
    else res.push(interval)
  }
  return res
}

console.log(mergeIntervals(intervals))
