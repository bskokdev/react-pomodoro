import { ActionButton } from "../controls/ActionButton";
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
import { PomodoroGoalTitle } from "./PomodoroGoalTitle";

interface IPomodoroGoalProps {
  index: number;
  goalName: string;
  finished: boolean;
  completeGoal: (index: number) => void;
  deleteGoal: (index: number) => void;
}

/** Not finished goal view component */
export function PomodoroGoal({
  goalName, index, finished,
  completeGoal, deleteGoal,
}: IPomodoroGoalProps) {
  return (
    <div className="flex flex-col gap-y-4 md:flex-row md:items-center md:justify-between md:gap-x-4 bg-red-200 rounded-xl px-4 py-4 my-4 font-bold text-gray-700">
      <PomodoroGoalTitle title={goalName} finished={finished} />
      {/* actions */}
      <div className="flex gap-x-2 text-md text-white">
        {!finished && (
          <ActionButton
            onClick={() => completeGoal(index)}
            color="bg-green-400"
            hover="hover:bg-green-500"
            icon={<AiFillCheckCircle />}
          />
        )}
        <ActionButton
          onClick={() => deleteGoal(index)}
          color="bg-red-400"
          hover="hover:bg-red-500"
          icon={<AiFillDelete />}
        />
      </div>
    </div>
  );
}
