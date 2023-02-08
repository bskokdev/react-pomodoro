import React from "react";
import { ActionButton } from "./ActionButton";

interface ITimerControlProps {
  isRunning: boolean;
  start: () => void;
  pause: () => void;
}

export function TimerControl({ isRunning, start, pause }: ITimerControlProps) {
  if (isRunning) {
    return (
      <ActionButton
        onClick={pause}
        color="bg-red-300"
        hover="hover:bg-red-400"
        text="Pause"
      />
    );
  }
  return (
    <ActionButton
      onClick={start}
      color="bg-green-300"
      hover="hover:bg-green-400"
      text="Start"
    />
  );
}
