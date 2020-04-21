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