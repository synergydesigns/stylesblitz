// this uses math.Random to generate unique numbers
// converts it to base 36 and extract the first nine letters
export default (index) => {
  let range = Math.random();

  if (Number.isInteger(index)) {
    range = index / 10000;
  }

  return `_${range.toString(36).substr(2)}`;
};
