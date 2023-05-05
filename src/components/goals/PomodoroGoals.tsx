import { PomodoroGoal } from "./PomodoroGoal";
import React, { ReactNode } from "react";
import { Goal } from "../../types";
import { useToggle } from "../../hooks/useToggle";
import { Toggle } from "../Toggle";

interface IPomodoroGoalsProps {
  title: string;
  goals: Goal[];
  completeGoal: (index: number) => void;
  deleteGoal: (index: number) => void;
  children: ReactNode;
}

/**
 * This component renders the goals and additional children (controls etc.)
 * @param goals
 * @param title
 * @param children
 * @param completeGoal - callback for completing a goal
 * @param deleteGoal - callback for deleting a goal
 */
export function PomodoroGoals({
  goals,
  title,
  children,
  completeGoal,
  deleteGoal,
}: IPomodoroGoalsProps) {
  const [toggleValue, toggle] = useToggle();
  return (
    <div className="bg-red-100 rounded-xl py-10 px-8">
      <div className="flex justify-between items-center cursor-pointer pb-3" onClick={toggle}>
        {/* title */}
        <h2 className="text-gray-700 text-3xl font-extrabold pb-3">
          {title}
        </h2>
        {/* we pass an empty callback here because toggle value is changed upon click on the entire section */}
        <Toggle toggleValue={toggleValue} toggle={() => {}} />
      </div>
      {toggleValue && (
        <div>
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
          {children}
        </div>
      )}
    </div>
  );
}
