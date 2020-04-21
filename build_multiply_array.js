const multiply = (array) => {
  const result = []
  for (let i = 0; i < array.length; i++) {
    let val = 1
    for (let j = 0; j < array.length; j++) {
      if (i === j) continue
      val *= array[j]
    }
    result.push(val)
  }
  return result
}

const multiply = (array) => {
  const length = array.length
  if (length == 0) return []
  const result = new Array(length)
  result[0] = 1
  for (i = 1; i < length; i++) {
    result[i] = array[i - 1] * result[i - 1]
  }
  let tmp = 1
  for (i = length - 2; i >= 0; i--) {
    tmp *= array[i + 1]
    result[i] *= tmp
  }
  return result
}
