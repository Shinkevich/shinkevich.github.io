const sequenceSum = (begin, end) => {
  // BEGIN (write your solution here)
  if (begin > end) {
    return NaN;
  }if (begin === end) {
  return begin;
  }
  else{
  return end + sequenceSum(begin, end - 1);
  };

  // END
};

export default sequenceSum;
