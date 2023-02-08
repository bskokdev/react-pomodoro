import { useTimer } from "../hooks/useTimer";
import { ActionButton } from "./ActionButton";
import { useMemo } from "react";
import { usePomodoro } from "../hooks/usePomodoro";

interface IPomodoroTimerProps {
  pomodoroMinutes: number;
  shortBreakMinutes: number;
  longBreakMinutes: number;
}

/**
 * Pomodoro timer component is responsible for rendering the timer and its controls
 */
export function PomodoroTimer(props: IPomodoroTimerProps) {
  // reconstruct the props
  const { pomodoroMinutes, shortBreakMinutes, longBreakMinutes } = props;
  // Timer logic
  const { isRunning, getTimer, setTimer, setIsRunning, start, pause } =
    useTimer(pomodoroMinutes);

  // Pomodoro timers
  const { pomodoro, takeShortBreak, takeLongBreak } = usePomodoro({
    setTimer,
    setIsRunning,
    pomodoroMinutes,
    shortBreakMinutes,
    longBreakMinutes,
  });

  // memoize the main button to prevent unnecessary re-renders
  const mainButton: JSX.Element = useMemo(() => {
    if (isRunning) {
      return (
        <ActionButton
          handleClick={pause}
          color="bg-red-300"
          hoverColor="bg-red-400"
          text="Pause"
        />
      );
    }
    return (
      <ActionButton
        handleClick={start}
        color="bg-green-300"
        hoverColor="bg-green-400"
        text="Start"
      />
    );
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center justify-center bg-red-100 rounded-2xl py-10 px-16">
      {/*Timer controls*/}
      <div className="text-gray-700 text-3xl">
        <ActionButton
          handleClick={pomodoro}
          color="bg-red-400"
          hoverColor="hover:bg-red-500"
          text="Pomodoro"
        />
        <ActionButton
          handleClick={takeShortBreak}
          color="bg-green-200"
          hoverColor="hover:bg-green-300"
          text="Short break"
        />
        <ActionButton
          handleClick={takeLongBreak}
          color="bg-rose-300"
          hoverColor="hover:bg-rose-400"
          text="Long break"
        />
      </div>
      {/*Timer render*/}
      <div className="py-10">
        <h2 className="text-center text-9xl font-extrabold text-gray-700">
          {getTimer()}
        </h2>
      </div>
      {/*Start or pause button*/}
      <div className="text-5xl text-gray-700">{mainButton}</div>
    </div>
  );
}
