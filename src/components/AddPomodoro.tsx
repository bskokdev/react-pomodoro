import { ActionButton } from "./controls/ActionButton";
import React from "react";
import { useInput } from "../hooks/useInput";

interface IAddPomodoroProps {
  addGoalByName: (name: string) => void;
}

/**
 * This component is responsible for adding a new pomodoro goal to the list.
 * @param addGoalByName - a function that adds a new goal to the list
 */
export function AddPomodoro({ addGoalByName }: IAddPomodoroProps) {
  const { inputValue, handleChange, clearInput } = useInput();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // no page reload
    event.preventDefault();
    addGoalByName(inputValue);
    clearInput();
  }

  return (
    <form
      className="flex flex-col gap-y-4 border-b-2 mb-10 text-white text-md"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        value={inputValue}
        placeholder="Add a pomodoro goal..."
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <ActionButton
        type="submit"
        color="bg-green-400"
        hover="hover:bg-green-500"
        text="Add goal"
      />
    </form>
  );
}
