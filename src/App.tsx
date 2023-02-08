import {PomodoroTimer} from "./components/PomodoroTimer";
import {PomodoroGoals} from "./components/goals/PomodoroGoals";

/**
 * This is the application component which loads the app
 */
function App() {
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
        <PomodoroTimer />
        <PomodoroGoals />
      </div>
    </div>
  );
}

export default App;
