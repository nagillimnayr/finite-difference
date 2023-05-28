function range(lowerBound: number, upperBound: number, step: number): number[] {
  const arr: number[] = [];
  for (let i = lowerBound; i <= upperBound; i += step) {
    arr.push(i);
  }
  return arr;
}

export default range;
