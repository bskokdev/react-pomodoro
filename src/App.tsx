import { AddPomodoro } from "./components/AddPomodoro";
import { PomodoroControls } from "./components/controls/PomodoroControls";
import { PomodoroGoalsGroupControls } from "./components/controls/PomodoroGoalsGroupControls";
import { TimerControl } from "./components/controls/TimerControl";
import { PomodoroGoals } from "./components/goals/PomodoroGoals";
import { PomodoroTimer } from "./components/PomodoroTimer";
import { useGoals } from "./hooks/useGoals";
import { usePomodoro } from "./hooks/usePomodoro";
import {ActionButton} from "./components/controls/ActionButton";
import React from "react";

/**
 * This is the application component which loads the app
 */
function App() {
  const {
    isRunning,
    isFinished,
    formattedTimer,
    start,
    pause,
    pomodoro,
    takeShortBreak,
    takeLongBreak,
  } = usePomodoro();

  const {
    goals,
    addGoalByName,
    completeGoal,
    deleteGoal,
    deleteFinished,
    deleteAllGoals,
  } = useGoals();

  // controls for the timer
  const controlActions = { pomodoro, takeShortBreak, takeLongBreak };
  const timerControl = { isRunning, start, pause };

  // goals grouped props and actions
  const goalsRenderProps = { goals, completeGoal, deleteGoal };
  const goalsGroupsActions = {
    deleteFinished,
    deleteAllGoals,
  };

  return (
    <div className="bg-red-200 flex flex-col items-center min-h-screen">
      {/* Header */}
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
      {/* Timer and goals */}
      <div className="flex flex-col gap-y-4 lg:gap-y-10 justify-center">
        <PomodoroTimer formattedTimer={formattedTimer}>
          <PomodoroControls {...controlActions} />
          {!isFinished && <TimerControl {...timerControl} />}
          {isFinished && (
                <ActionButton
                    onClick={pomodoro}
                    color="bg-orange-300"
                    hover="hover:bg-orange-400"
                    text="Reset"
                />
          )}
        </PomodoroTimer>
        <PomodoroGoals title="Goals" {...goalsRenderProps}>
          <AddPomodoro addGoalByName={addGoalByName} />
          {goals.length > 0 && (
            <PomodoroGoalsGroupControls {...goalsGroupsActions} />
          )}
        </PomodoroGoals>
      </div>
    </div>
  );
}

export default App;
