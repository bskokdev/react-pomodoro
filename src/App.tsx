import { PomodoroTimer } from "./components/PomodoroTimer";
import { PomodoroGoals } from "./components/goals/PomodoroGoals";
import { usePomodoro } from "./hooks/usePomodoro";
import { PomodoroControls } from "./components/controls/PomodoroControls";
import {TimerControl} from "./components/controls/TimerControl";

/**
 * This is the application component which loads the app
 */
function App() {
  const {
    isRunning,
    formattedTimer,
    start,
    pause,
    pomodoro,
    takeShortBreak,
    takeLongBreak,
  } = usePomodoro();
  // controls for the timer
  const controlActions = { pomodoro, takeShortBreak, takeLongBreak };
  const timerControl = { isRunning, start, pause };

  return (
    <div className="bg-red-200 flex flex-col items-center p-5">
      <div className="py-8">
        <h1 className="tracking-widest text-5xl uppercase font-extrabold text-center text-gray-700">
          Pomodoro
        </h1>
        <h2 className="text-2xl text-center text-gray-500 pt-4 font-medium">
          Learn more about the
          <a
            href="https://todoist.com/cs/productivity-methods/pomodoro-technique"
            target="_blank"
            className="underline px-1"
          >
            Pomodoro technique
          </a>
        </h2>
      </div>
      <div className="flex flex-col gap-y-4 lg:gap-y-10 justify-center">
        <PomodoroTimer formattedTimer={formattedTimer}>
          <PomodoroControls {...controlActions} />
          <TimerControl {...timerControl} />
        </PomodoroTimer>
        <PomodoroGoals />
      </div>
    </div>
  );
}

export default App;
