interface IPomodoroGoalTitleProps {
  title: string;
  finished: boolean;
}

/** This component is used to render the title of a goal based on {finished} prop*/
export function PomodoroGoalTitle({
  title,
  finished,
}: IPomodoroGoalTitleProps) {
  if (finished) {
    return (
      <h3 className="text-2xl order-last md:order-first uppercase font-extrabold line-through text-gray-400">
        {title}
      </h3>
    );
  }
  return (
    <h3 className="text-2xl order-last md:order-first uppercase font-extrabold">
      {title}
    </h3>
  );
}
