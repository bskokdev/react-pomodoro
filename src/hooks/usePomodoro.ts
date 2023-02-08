import { useTimer } from "./useTimer";

interface UsePomodoroProps {
  pomodoroMinutes: number;
  shortBreakMinutes: number;
  longBreakMinutes: number;
}

export function usePomodoro({
  pomodoroMinutes,
  shortBreakMinutes,
  longBreakMinutes,
}: UsePomodoroProps) {
  const { setTimer, setIsRunning, isRunning, start, pause, formattedTimer } =
    useTimer(pomodoroMinutes);

  function pomodoro(): void {
    setIsRunning(false);
    setTimer(pomodoroMinutes * 60);
  }

  function takeShortBreak(): void {
    setIsRunning(false);
    setTimer(shortBreakMinutes * 60);
  }

  function takeLongBreak(): void {
    setIsRunning(false);
    setTimer(longBreakMinutes * 60);
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
