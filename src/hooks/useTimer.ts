import { useEffect, useState } from "react";

interface TimerHook {
  getTimer: () => string;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  setTimer: (value: number) => void;
  setIsRunning: (value: boolean) => void;
}

/**
 * A custom hook that provides a timer logic and a timer in the format of mm:ss
 * @return {TimerHook}
 */
export function useTimer(defaultValue: number): TimerHook {
  const [timer, setTimer] = useState<number>(defaultValue * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // runs on component mount or if timer or isRunning changes
  // if isRunning is true and timer > 0, start the timer
  useEffect(() => {
    if (isRunning && timer > 0) {
      const timeoutId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [isRunning, timer]);

  /**
   * Get the timer in the format of mm:ss
   * @return {string} the timer in the format of mm:ss
   */
  function getTimer(): string {
    const minutes = Math.floor(timer / 60);
    const formattedSeconds = (timer - minutes * 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    const formattedMinutes = minutes.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  function start(): void {
    setIsRunning(true);
  }

  function pause(): void {
    setIsRunning(false);
  }

  return {
    isRunning,
    getTimer,
    setTimer,
    setIsRunning,
    start,
    pause,
  };
}
