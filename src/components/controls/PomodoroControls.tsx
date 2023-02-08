import { ActionButton } from "./ActionButton";

interface IPomodoroControlsProps {
  pomodoro: () => void;
  takeShortBreak: () => void;
  takeLongBreak: () => void;
}

export function PomodoroControls({
  pomodoro,
  takeShortBreak,
  takeLongBreak,
}: IPomodoroControlsProps) {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-x-4 gap-y-4 text-gray-700 text-2xl md:text-3xl">
      <ActionButton
        onClick={pomodoro}
        color="bg-red-400"
        hover="hover:bg-red-500"
        text="Pomodoro"
      />
      <ActionButton
        onClick={takeShortBreak}
        color="bg-green-200"
        hover="hover:bg-green-300"
        text="Short break"
      />
      <ActionButton
        onClick={takeLongBreak}
        color="bg-rose-300"
        hover="hover:bg-rose-400"
        text="Long break"
      />
    </div>
  );
}
