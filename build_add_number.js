const add = (num1, num2) => {
  if (num1 == 0) {
    return num2;
  } else if (num2 == 0) {
    return num1;
  } else {
    let sum;
    while (num2 != 0) {
      sum = num1 ^ num2
      num2 = (num1 & num2) << 1
      num1 = sum
    }
    return num1;
  }
}