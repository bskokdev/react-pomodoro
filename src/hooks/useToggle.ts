import {useCallback, useState} from "react";

/**
 * A hook that returns a boolean value and a function to toggle it.
 * @param initialValue
 */
export function useToggle(initialValue = true): [boolean, () => void] {
  const [toggleValue, setToggleValue] = useState(initialValue);
  const toggle = useCallback(() => setToggleValue((value) => !value), []);
  return [toggleValue, toggle];
}
