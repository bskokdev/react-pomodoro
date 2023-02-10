import { useTimer } from "./useTimer";

export function usePomodoro() {
  const { setTimer, setIsRunning, isRunning, start, pause, formattedTimer } =
    useTimer(25);

  function pomodoro(): void {
    setIsRunning(false);
    setTimer(25 * 60);
  }

  function takeShortBreak(): void {
    setIsRunning(false);
    setTimer(5 * 60);
  }

  function takeLongBreak(): void {
    setIsRunning(false);
    setTimer(15 * 60);
  }

  return {
    isRunning,
    formattedTimer,
    pomodoro,
    takeShortBreak,
    takeLongBreak,
    start,
    pause,
  };
}
