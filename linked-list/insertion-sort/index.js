const { LinkedListNode, createLinkedListFromArray } = require('../LinkedList').default

let linkedList = createLinkedListFromArray([7, 4, 2, 5, 1, 9])

function insertionSort (head) {
  let sorted = new LinkedListNode(head.data) // start the sorted linked list
  head = head.next // increment the head forward

  while (head) {
    if (sorted.data > head.data) { // edge case, the first value is greater than the current value
      sorted = new LinkedListNode(head.data, sorted)
    } else {
      let sortedCur = sorted // we want to keep track of sorteds 'head'
      while (sortedCur.next && sortedCur.next.data < head.data) sortedCur = sortedCur.next // iterate until next null or we find a value greater than current value
      let tmp = sortedCur.next // keep track of values after insertion
      sortedCur.next = new LinkedListNode(head.data, sortedCur) // we found were to place the next
      sortedCur.next.next = tmp // add back the values lost due to the insertion
    }
    head = head.next // move to the next value of interest
  }

  return sorted
}

console.log(insertionSort(linkedList))
