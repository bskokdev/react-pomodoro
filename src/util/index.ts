/**
 * Checks if the given index is within the bounds of the array.
 * @param array
 * @param index
 */
export function isIdxInArrayRange(array: any[], index: number): boolean {
  return index >= 0 && index < array.length;
}
