import { PomodoroGoal } from "./PomodoroGoal";
import React from "react";
import {useGoals} from "../../hooks/useGoals";
import {AddPomodoro} from "../AddPomodoro";
import {PomodoroGoalsGroupControls} from "../controls/PomodoroGoalsGroupControls";

export function PomodoroGoals() {
  const {
    goals,
    addGoalByName,
    completeGoal,
    deleteGoal,
    deleteFinished,
    deleteAllGoals,
  } = useGoals();
  const groupActions = { deleteFinishedGoals: deleteFinished, deleteAllGoals };
  return (
    <div className="bg-red-100 rounded-xl py-10 px-8">
      <h2 className="text-gray-700 text-4xl font-extrabold pb-3 uppercase">
        goals
      </h2>
      <AddPomodoro addGoalByName={addGoalByName} />
      {/* rendering goals */}
      <ul>
        {goals.map((goal, idx) => (
          <li key={`${goal.name}-${idx}`}>
            <PomodoroGoal
              index={idx}
              finished={goal.finished}
              goalName={goal.name}
              completeGoal={completeGoal}
              deleteGoal={deleteGoal}
            />
          </li>
        ))}
      </ul>
      {/* Multi delete actions */}
      {goals.length > 0 && <PomodoroGoalsGroupControls {...groupActions} />}
    </div>
  );
}
