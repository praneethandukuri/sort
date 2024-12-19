const sortedNumbers = function (numbers) {
  return numbers.toSorted(function (a, b) {
    if ((a & 1) === (b & 1)) {
      return a - b;
    }
    return a & 1 ? -1 : 1;
  });
};

console.log(sortedNumbers([1, 3, 6, 4, 9, 2, 10]));