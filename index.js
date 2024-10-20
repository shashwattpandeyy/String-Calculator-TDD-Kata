function add(numberString) {
  if (!numberString) {
    return 0;
  }

  const numbers = numberString.split(/[/,\s\n ;]/g).map(Number);
  console.log("numbers", numbers);

  const negativeNumbers = [];

  let sum = 0;
  for (let num of numbers) {
    if (num < 0) {
      negativeNumbers.push(num);
      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(",")}`,
      );
    }
    sum += num;
  }

  console.log("sum", sum);
  return sum;
}

module.exports = add;
