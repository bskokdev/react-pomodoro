import {ReactNode} from "react";

interface IPomodoroTimerProps {
    formattedTimer: string;
    children: ReactNode;
}

/**
 * This component renders the timer and additional children (controls etc.)
 * @param formattedTimer
 * @param children
 */
export function PomodoroTimer({formattedTimer, children}: IPomodoroTimerProps) {
    return (
        <div className="flex flex-col items-center justify-center bg-red-100 rounded-2xl py-10 px-16">
            {/*Timer render*/}
            <div className="py-10">
                <h2 className="text-center text-7xl md:text-9xl font-extrabold text-gray-700">
                    {formattedTimer}
                </h2>
            </div>
            {/*Start or pause button*/}
            <div className="text-5xl text-gray-700 flex flex-col items-center gap-y-6">
                {children}
            </div>
        </div>
    );
}
