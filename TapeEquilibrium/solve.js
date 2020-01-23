const algo = arr => {
  let sum_half = 0
  let i = 0
  let p = 0
  while(i < arr.length)
    sum_half += arr[i++]
  sum_half /= 2
  let left_side_sum = 0
  let last_diff = 0
  for(i in arr) {
    left_side_sum += arr[i]
    let diff = sum_half - left_side_sum
    if (last_diff > 0 && diff < 0) {
      p = i
      break;
    }
    last_diff = diff 
  }
  return p
}

const arr = [5,3,7,10,1,4,6]
let p = algo(arr)
