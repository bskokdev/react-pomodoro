import {PomodoroControls} from "./controls/PomodoroControls";
import {TimerControl} from "./controls/TimerControl";
import {usePomodoro} from "../hooks/usePomodoro";

/**
 * Pomodoro timer component is responsible for rendering the timer and its controls
 */
export function PomodoroTimer() {
  // calling the hook instead of props drilling
  const {
    isRunning,
    formattedTimer,
    start,
    pause,
    pomodoro,
    takeShortBreak,
    takeLongBreak,
  } = usePomodoro({
    pomodoroMinutes: 25,
    shortBreakMinutes: 5,
    longBreakMinutes: 15,
  });

  // control actions objects for components
  const controlActions = { pomodoro, takeShortBreak, takeLongBreak };
  const timerControl = { isRunning, start, pause };

  return (
    <div className="flex flex-col items-center justify-center bg-red-100 rounded-2xl py-10 px-16">
      {/*Timer controls*/}
      <PomodoroControls {...controlActions} />
      {/*Timer render*/}
      <div className="py-10">
        <h2 className="text-center text-7xl md:text-9xl font-extrabold text-gray-700">
          {formattedTimer}
        </h2>
      </div>
      {/*Start or pause button*/}
      <div className="text-5xl text-gray-700">
        <TimerControl {...timerControl} />
      </div>
    </div>
  );
}
