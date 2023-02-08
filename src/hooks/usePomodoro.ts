interface UsePomodoroProps {
    setTimer: (timer: number) => void;
    setIsRunning: (isRunning: boolean) => void;
    pomodoroMinutes: number;
    shortBreakMinutes: number;
    longBreakMinutes: number;
}

interface PomodoroHook {
    pomodoro: () => void;
    takeShortBreak: () => void;
    takeLongBreak: () => void;
}

export function usePomodoro(props: UsePomodoroProps): PomodoroHook {
    const {
        setTimer,
        setIsRunning,
        pomodoroMinutes,
        shortBreakMinutes,
        longBreakMinutes
    } = props;

    function pomodoro(): void {
        setIsRunning(false);
        setTimer(pomodoroMinutes * 60);
    }

    function takeShortBreak(): void {
        setIsRunning(false);
        setTimer(shortBreakMinutes * 60);
    }

    function takeLongBreak(): void {
        setIsRunning(false);
        setTimer(longBreakMinutes * 60);
    }

    return {
        pomodoro,
        takeShortBreak,
        takeLongBreak
    }
}