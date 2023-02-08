import { PomodoroTimer } from "./components/PomodoroTimer";

/**
 * This is the application component which loads the app
 */
function App() {
  return (
    <div className="h-screen w-screen bg-red-200 flex flex-col items-center">
      <h1 className="tracking-widest text-6xl uppercase font-extrabold text-center pt-8 text-gray-700">
        Pomodoro
      </h1>
      <h2 className="text-2xl text-center text-gray-500 pt-4 pb-5 font-medium">
        Learn more about the
        <a
          href="https://todoist.com/cs/productivity-methods/pomodoro-technique"
          target="_blank"
          className="underline px-1"
        >
          Pomodoro technique
        </a>
      </h2>
      <PomodoroTimer
        pomodoroMinutes={25}
        shortBreakMinutes={5}
        longBreakMinutes={15}
      />
      {/*todo: add a goals*/}
    </div>
  );
}

export default App;
