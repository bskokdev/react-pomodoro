import { ActionButton } from "./ActionButton";
import { AiFillDelete } from "react-icons/ai";

interface IPomodoroGoalsGroupControls {
  deleteFinishedGoals: () => void;
  deleteAllGoals: () => void;
}

export function PomodoroGoalsGroupControls({
  deleteFinishedGoals,
  deleteAllGoals,
}: IPomodoroGoalsGroupControls) {
  return (
    <div className="flex gap-x-4 justify-end">
      <ActionButton
        onClick={deleteFinishedGoals}
        text="Finished"
        icon={<AiFillDelete />}
        color="bg-red-400"
        hover="hover:bg-red-500"
      />
      <ActionButton
        onClick={deleteAllGoals}
        text="All"
        icon={<AiFillDelete />}
        color="bg-red-400"
        hover="hover:bg-red-500"
      />
    </div>
  );
}
