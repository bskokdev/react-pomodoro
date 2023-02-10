import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

interface IToggleProps {
  toggleValue: boolean;
  toggle: () => void;
}

/**
 * This component renders an arrow up or down depending on the toggleValue and calls the toggle function on click
 * @param toggleValue
 * @param toggle
 * @constructor
 */
export function Toggle({ toggleValue, toggle }: IToggleProps) {
  if (toggleValue) {
    return (
      <AiOutlineArrowUp
        onClick={toggle}
        className="hover:cursor-pointer text-4xl"
      />
    );
  }
  return (
    <AiOutlineArrowDown
      onClick={toggle}
      className="hover:cursor-pointer text-4xl"
    />
  );
}
